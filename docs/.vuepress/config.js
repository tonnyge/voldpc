const resolve = require('vuepress-theme-hope/resolve');

module.exports = resolve({
  title: '火山视窗开发平台文档',
  description: '火山视窗开发平台文档，带你走进火山视窗开发平台的大门',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#50bae6' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/assets/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    [
      'meta',
      { name: 'msapplication-TileImage', content: '/assets/icons/msapplication-icon-144x144.png' }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'preload', href: '/assets/css/iconfont.css', as: 'style' }]
  ],
  base: '/',
  plugins: [
    ['copyright', { noSelect: true }],
    ['@vuepress/active-header-links'],
    ['@vuepress/nprogress'],
    ['@vuepress/google-analytics', { ga: 'UA-179290022-1' }],
    [
      '@vuepress/active-header-links',
      { sidebarLinkSelector: '.sidebar-link', headerAnchorSelector: '.header-anchor' }
    ],
    ['@mr-hope/last-update']
  ],
  markdown: { lineNumbers: false },
  themeConfig: {
    logo: '/assets/icons/favicon-32x32.png',
    repo: 'tonnyge/voldpc',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    searchMaxSuggestions: 10,
    searchPlaceholder: '搜索',
    hostname: 'https://voldpc.com',
    smoothScroll: true,
    sidebarDepth: 2,
    comment: {
      type: 'valine',
      appId: 'GvWvQ0m1QOC8WC8LlGvzjTGR-MdYXbMMI',
      appKey: 'QEgW4xyGLdqIFvKxHo80B7mW'
    },
    algolia: {
      apiKey: '71296f91d01da623028b33af34591094',
      indexName: 'voldpc'
    },
    footer: {
      display: true,
      footer: 'MIT Licensed | Copyright © 2020 VoldPC.Com'
    },
    navbar: true,
    nav: [
      { text: '入门', link: '/starter/', icon: 'starter' },
      { text: '组件', link: '/component/', icon: 'component' },
      { text: '类库', link: '/library/', icon: 'library' },
      {
        text: '加群',
        link: 'https://qm.qq.com/cgi-bin/qm/qr?k=PpUsjBP8Wwowg4VEIAwNuaKEZRznIEYa&jump_from=webapi',
        icon: 'joingroup'
      },
      {
        text: '友链',
        icon: 'link',
        items: [
          { text: '学编程啦', link: 'https://www.learn-program.club' },
          { text: '易之园资源站', link: 'https://www.eyyzy.com' },
          { text: '利快云', link: 'https://www.lkuaiy.com' }
        ]
      }
    ],
    sidebar: {
      '/starter/': getStarterSidebar('前言'),
      '/component/': getComponentSidebar('组件'),
      '/library/': getLibrarySidebar('类库')
    }
  }
});

function getStarterSidebar(groupA) {
  return [
    {
      title: groupA,
      icon: 'intro',
      collapsable: false,
      children: ['', 'release']
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
