/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  logo: (
    <span
      style={{
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      }}
    >
      {"<IPK/>"}
    </span>
  ),
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
  footer: {
    text: <span>Iringan Pengantar Koding {new Date().getFullYear()}</span>,
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 2,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – IPK",
    };
  },
};
