import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import { compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import { redirect } from "next/navigation";
import path from "path";
import fs from "fs";

import { DIR_PATH_BLOG } from "@/constants/variable";
import { BlogPreview } from "@/types/blog";

const components = {
  // add custom component here
};

interface Filters {
  limit?: number;
}

export const getListBlog = async (filters: Filters) => {
  const { limit } = filters;

  let postFilePaths = fs
    .readdirSync(DIR_PATH_BLOG)
    .filter((postFilePath) => {
      return path.extname(postFilePath).toLowerCase() === ".mdx";
    })
    .sort((a, b) => {
      return Number(b.match(/(\d+)/g)![0]) - Number(a.match(/(\d+)/g)![0]);
    });
  if (limit) postFilePaths = postFilePaths.slice(0, limit);

  const postPreviews: BlogPreview[] = [];

  for (const postFilePath of postFilePaths) {
    const postFile = fs.readFileSync(
      `src/contents/blog/${postFilePath}`,
      "utf8"
    );

    const serializedPost = await serialize(postFile, {
      parseFrontmatter: true,
    });

    postPreviews.push({
      ...serializedPost.frontmatter,
      slug: postFilePath.replace(".mdx", ""),
    } as BlogPreview);
  }

  return postPreviews;
};

export const getDetailBlog = async (slug: string) => {
  const postFilePath = fs
    .readdirSync(DIR_PATH_BLOG)
    .filter((postFilePath) => {
      return path.extname(postFilePath).toLowerCase() === ".mdx";
    })
    .map((val) => {
      return val.replace(".mdx", "");
    })
    .find((val) => val === slug);

  if (!postFilePath) {
    redirect("/");
  }

  const filePath = path.resolve(DIR_PATH_BLOG + `${postFilePath}.mdx`);
  const postFile = fs.readFileSync(filePath);

  const { content, frontmatter } = await compileMDX<{
    title: string;
    description: string;
    previewImage: string;
    publishedAt: string;
  }>({
    source: postFile,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkToc],
        rehypePlugins: [rehypeSanitize, rehypeRaw, rehypeHighlight, rehypeSlug],
      },
    },
    components: components,
  });

  return { content, frontmatter };
};
