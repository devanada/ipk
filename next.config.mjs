import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: false,
  experimental: {
    appDir: true,
    mdxRs: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/hypeotesa/**",
      },
    ],
  },
};

const mdxConfig = withMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [rehypeSanitize, rehypeRaw, rehypeHighlight],
    // providerImportSource: "@mdx-js/react",
  },
});

export default mdxConfig(nextConfig);
