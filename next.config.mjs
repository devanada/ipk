import million from "million/compiler";
import withNextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
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

const millionConfig = {
  auto: { rsc: true },
};

const nextraConfig = withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.tsx",
  staticImage: true,
});

export default million.next(nextraConfig(nextConfig, millionConfig));
