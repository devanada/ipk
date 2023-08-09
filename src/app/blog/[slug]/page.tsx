import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { Metadata } from "next";

import { getDetailBlog } from "@/app/api/blog";

dayjs.extend(relativeTime);

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getDetailBlog(params.slug);

  return {
    title: `${data.frontmatter.title} | IPK`,
    description: data.frontmatter.description,
  };
}

export default async function Page({ params }: Props) {
  const { content, frontmatter } = await getDetailBlog(params.slug);

  return (
    <article className="mb-40">
      <div className="w-full flex flex-col relative mb-8">
        <Image
          alt={frontmatter.title}
          src={frontmatter.previewImage}
          width="0"
          height="0"
          sizes="100%"
          className="w-full h-96 object-cover mb-5"
        />
        <p className="text-3xl font-bold">{frontmatter.title}</p>
        <p className="text-sm text-white/60">
          {dayjs(frontmatter.publishedAt).format("MMMM DD, YYYY")} (
          {dayjs(frontmatter.publishedAt).fromNow()})
        </p>
      </div>
      <div className="prose !prose-invert max-w-none">{content}</div>
    </article>
  );
}
