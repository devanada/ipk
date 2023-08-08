import { getListBlog } from "@/app/api/blog";
import BlogItem from "@/components/blog_item";

export default async function Home() {
  const blogList = await getListBlog();

  return (
    <div>
      {blogList.map((blogItem) => (
        <BlogItem key={blogItem.slug} {...blogItem} />
      ))}
    </div>
  );
}
