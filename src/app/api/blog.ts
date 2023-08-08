import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import { compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import { redirect } from "next/navigation";
import path from "path";
import fs from "fs";

import { blogList } from "@/constants/blog";
import { BlogPreview } from "@/types/blog";

const components = {
  // add custom component here
};

export const getListBlog = async () => {
  const postFilePaths = fs
    .readdirSync("src/contents/blog")
    .filter((postFilePath) => {
      return path.extname(postFilePath).toLowerCase() === ".mdx";
    });

  const postPreviews: BlogPreview[] = [];

  for (const postFilePath of postFilePaths) {
    const postFile = fs.readFileSync(
      `src/contents/blog/${postFilePath}`,
      "utf8"
    );

    // serialize the MDX content to a React-compatible format
    // and parse the frontmatter
    const serializedPost = await serialize(postFile, {
      parseFrontmatter: true,
    });

    postPreviews.push({
      ...serializedPost.frontmatter,
      // add the slug to the frontmatter info
      slug: postFilePath.replace(".mdx", ""),
    } as BlogPreview);
  }

  return postPreviews;
};

export const getDetailBlog = async (slug: string) => {
  const findBySlug = blogList.find((item) => item.key === slug);

  if (!findBySlug) {
    redirect("/");
  }

  const filePath = path.resolve(findBySlug.render);
  const postFile = fs.readFileSync(filePath);

  const { content, frontmatter } = await compileMDX<{
    title: string;
    description: string;
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
