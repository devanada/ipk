import { useRouter } from "next/router";
import { type DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="font-mono text-3xl text-rataalada">{"<IPK/>"}</span>,
  project: {
    link: "https://github.com/devanada/ipk",
  },
  docsRepositoryBase: "https://github.com/devanada/ipk",
  toc: {
    backToTop: true,
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  head: () => {
    const { frontMatter } = useConfig();

    const ogConfig = {
      title: "IPK",
      description: "Iringan Pengantar Koding",
      favicon: "/favicon.ico",
    };
    const favicon = String(ogConfig.favicon);
    const title = String(frontMatter.title || ogConfig.title);
    const description = String(frontMatter.description || ogConfig.description);

    return (
      <>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        <link rel="shortcut icon" href={favicon} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={favicon} type="image/svg+xml" />
        <meta name="apple-mobile-web-app-title" content={title} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </>
    );
  },
  footer: {
    text: <span>Iringan Pengantar Koding {new Date().getFullYear()}</span>,
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 2,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();

    if (["/"].includes(asPath)) {
      return { titleTemplate: "IPK" };
    }

    return {
      titleTemplate: "%s – IPK",
    };
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  darkMode: false,
  primaryHue: {
    light: 120,
    dark: 120,
  },
  primarySaturation: {
    light: 50,
    dark: 100,
  },
};

export default config;
