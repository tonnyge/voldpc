module.exports = {
  title: '火山PC开发平台文档',
  description: '火山PC文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#50bae6' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  base: '/',
  plugins: [
    ['copyright', { noSelect: true }],
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/nprogress'],
    ['@vuepress/google-analytics', { ga: 'UA-179290022-1' }],
    ['@vuepress/pwa', { serviceWorker: true, updatePopup: true }],
    [
      '@vuepress/active-header-links',
      { sidebarLinkSelector: '.sidebar-link', headerAnchorSelector: '.header-anchor' }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment');
          moment.locale('zh-CN');
          return moment(timestamp).fromNow();
        }
      }
    ]
  ],
  markdown: { lineNumbers: false },
  themeConfig: {
    logo: '/icons/favicon-32x32.png',
    repo: 'tonnyge/voldpc',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true,
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    navbar: true,
    nav: [
      { text: '入门', link: '/starter/' },
      { text: '组件', link: '/component/' },
      { text: '类库', link: '/library/' }
    ],
    sidebar: {
      '/starter/': getStarterSidebar('入门'),
      '/component/': getComponentSidebar('组件'),
      '/library/': getLibrarySidebar('类库')
    }
  }
};

function getStarterSidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ['']
    }
  ];
}

function getComponentSidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ['']
    }
  ];
}

function getLibrarySidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ['']
    }
  ];
}
