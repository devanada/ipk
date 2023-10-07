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
  footer: {
    text: "Iringan Pengantar Koding",
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
