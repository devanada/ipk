import type { Metadata } from "next";

import { getListBlog } from "@/app/api/blog";
import BlogItem from "@/components/blog_item";

export const metadata: Metadata = {
  title: "Welcome to IPK",
  description:
    "IPK stands for Iringan Pengantar Koding, another platform that I wrote as a learning module to ALTA's mentee so that they can learn Frontend.",
};

export default async function Page() {
  const blogList = await getListBlog({});

  return (
    <div className="mb-40">
      {blogList.map((blogItem) => (
        <BlogItem key={blogItem.slug} {...blogItem} />
      ))}
    </div>
  );
}
