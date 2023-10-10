import { useRouter } from "next/router";
import { type DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/devanada/ipk",
  },
  docsRepositoryBase: "https://github.com/devanada/ipk",
  logo: <span className="font-mono text-3xl text-rataalada">{"<IPK/>"}</span>,
  head: () => {
    const ogConfig = {
      title: "IPK",
      description: "Iringan Pengantar Koding",
      favicon: "/favicon.ico",
    };

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={ogConfig.title} />
        <meta property="og:description" content={ogConfig.description} />
      </>
    );
  },
  footer: {
    text: <span>Iringan Pengantar Koding {new Date().getFullYear()}</span>,
  },
  sidebar: {
    toggleButton: true,
    autoCollapse: true,
    defaultMenuCollapseLevel: 2,
  },
  search: {
    placeholder: "Search...",
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
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
  useNextSeoProps() {
    const { asPath } = useRouter();

    if (["/"].includes(asPath)) {
      return { titleTemplate: "IPK" };
    }

    return {
      titleTemplate: "%s – IPK",
    };
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
