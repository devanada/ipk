import type { Metadata } from "next";

import { getContent } from "@/app/api/learning";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getContent(params.slug);

  return {
    title: data.frontmatter.title,
    description: data.frontmatter.description,
  };
}

export default async function Page({ params }: Props) {
  const data = await getContent(params.slug);

  return <>{data.content}</>;
}
