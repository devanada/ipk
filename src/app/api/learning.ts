import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import { compileMDX } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";
import path from "path";
import fs from "fs";

import { Heading, P, Code, UL, Pre } from "@/components/mdx";
import { DIR_PATH } from "@/constants/variable";

const components = {
  // h1: Heading.H1,
  // h2: Heading.H2,
  // p: P,
  // code: Code,
  // ul: UL,
  // pre: Pre,
};

export const getContent = async (slug: string) => {
  const splitSlug = slug.split("-");
  const readDir = fs.readdirSync(DIR_PATH + splitSlug[0]);

  if (!readDir) {
    redirect("/learning");
  }

  let filePath = "";
  readDir.forEach((dir) => {
    if (dir.includes(".mdx")) {
      filePath = path.resolve(`${DIR_PATH}/${splitSlug[0]}/${dir}`);
    } else {
      const temp = fs.readdirSync(DIR_PATH + splitSlug[0] + `/${dir}`);
      temp.forEach((val) => {
        if (val.includes(splitSlug[1])) {
          filePath = path.resolve(`${DIR_PATH}/${splitSlug[0]}/${dir}/${val}`);
        }
      });
      filePath = "";
    }
  });

  let postFile: Buffer;
  try {
    postFile = fs.readFileSync(filePath);
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
        rehypePlugins: [rehypeSanitize, rehypeRaw, rehypeHighlight, rehypeSlug],
      },
    },
    components: components,
  });

  return { content, frontmatter };
};
