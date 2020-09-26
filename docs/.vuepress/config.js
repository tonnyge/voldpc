module.exports = {
  title: "火山PC开发平台文档",
  description: "火山PC文档",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: "/voldpc/",
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    repo: "tonnyge/voldpc",
    repoLabel: "GitHub",
    editLinkText: "在 GitHub 上编辑此页",
    smoothScroll: true,
    sidebarDepth: 2,
    lastUpdated: "上次更新",
    navbar: true,
    nav: [
      {
        text: "入门",
        link: "/starter/",
      },
    ],
    sidebar: {
      "/starter/": getStarterSidebar("入门"),
    },
  },
};

function getStarterSidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [""],
    },
  ];
}
