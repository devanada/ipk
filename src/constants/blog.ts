export interface BlogType {
  key: string;
  render: string;
}

export const blogList: BlogType[] = [
  {
    key: "first-blog",
    render: "src/contents/learning/first_post.mdx",
  },
];
