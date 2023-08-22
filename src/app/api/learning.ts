import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import { compileMDX } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";
import path from "path";
import fs from "fs";

import { Heading, P, Code, UL, Pre } from "@/components/mdx";
import { DIR_PATH_LEARNING } from "@/constants/variable";

const components = {
  // h1: Heading.H1,
  // h2: Heading.H2,
  // p: P,
  // code: Code,
  // ul: UL,
  // pre: Pre,
};

const getFilePath = (readDir: string[], splitSlug: string[]) => {
  for (const dir of readDir) {
    if (dir.includes(".mdx")) {
      if (dir.includes(splitSlug[1])) {
        return path.resolve(`${DIR_PATH_LEARNING}/${splitSlug[0]}/${dir}`);
      }
    } else {
      const temp = fs.readdirSync(
        `${DIR_PATH_LEARNING}/${splitSlug[0]}/${dir}`
      );
      for (const val of temp) {
        if (val.includes(splitSlug[1])) {
          return path.resolve(
            `${DIR_PATH_LEARNING}/${splitSlug[0]}/${dir}/${val}`
          );
        }
      }
    }
  }
};

export const getContent = async (slug: string) => {
  const splitSlug = slug.split("-");
  const readDir = fs.readdirSync(`${DIR_PATH_LEARNING}/${splitSlug[0]}`);

  if (!readDir) {
    redirect("/learning");
  }

  let filePath = getFilePath(readDir, splitSlug);

  let postFile: Buffer;
  try {
    postFile = fs.readFileSync(filePath!);
  } catch (error) {
    redirect("/learning");
  }

  const { content, frontmatter } = await compileMDX<{
    title: string;
    description: string;
  }>({
    source: postFile,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkToc],
        rehypePlugins: [rehypeHighlight, rehypeSlug],
      },
    },
    components: components,
  });

  return { content, frontmatter };
};

export const getFirstPage = async () => {
  let postFile = fs.readFileSync("README.md");

  const { content, frontmatter } = await compileMDX<{
    title: string;
    description: string;
  }>({
    source: postFile,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkToc],
        rehypePlugins: [rehypeHighlight, rehypeSlug],
      },
    },
    components: components,
  });

  return { content, frontmatter };
};
