const { config } = require('vuepress-theme-hope');

module.exports = config({
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
    ['meta', { name: 'baidu_union_verify', content: '988907e43cd9548ddeaf9a9646899ded' }],
    ['link', { rel: 'preload', href: '/assets/css/iconfont.css', as: 'style' }]
  ],
  base: '/',
  plugins: [
    ['@vuepress/google-analytics', { ga: 'UA-179290022-1' }],
    ['vuepress-plugin-google-adsense', { ad_client: 'ca-pub-6668627590810317' }],
    [
      '@vuepress/active-header-links',
      { sidebarLinkSelector: '.sidebar-link', headerAnchorSelector: '.header-anchor' }
    ],
    ['vuepress-plugin-baidu-tongji-analytics', { key: 'a8eafd5bfb6cde8a17e6c255fc170ced' }]
  ],
  themeConfig: {
    baseLang: 'zh-CN',
    logo: '/assets/icons/favicon-32x32.png',
    author: 'VoldPC',
    repo: 'VoldPC/voldpc',
    docsDir: 'docs',
    searchPlaceholder: '搜索',
    hostname: 'https://voldpc.com',
    comment: {
      type: 'valine',
      appId: 'GvWvQ0m1QOC8WC8LlGvzjTGR-MdYXbMMI',
      appKey: 'QEgW4xyGLdqIFvKxHo80B7mW',
      comment: false
    },
    copyright: {
      status: 'global',
      noSelect: true
    },
    footer: {
      display: true
    },
    mdEnhance: {
      lineNumbers: false
    },
    nav: [
      { text: '入门', link: '/starter/', icon: 'starter' },
      // { text: '组件', link: '/component/', icon: 'component' },
      // { text: '类库', link: '/library/', icon: 'library' },
      // {
      //   text: '更多',
      //   ariaLabel: '更多',
      //   items: [
      //     {
      //       text: '教程',
      //       items: [
      //         { text: 'C++ 教程', link: '/more/cpp/' },
      //         { text: 'Java 教程', link: '/more/java/' },
      //         { text: 'Python 教程', link: '/more/python/' },
      //         { text: '数据库 教程', link: '/more/db/' }
      //       ]
      //     }
      //   ]
      // },
      {
        text: '友链',
        icon: 'link',
        items: [
          { text: '易之园资源站', link: 'https://www.eyyzy.com' },
          { text: '世恒教育', link: 'http://www.shteach.com' },
          { text: '利快云', link: 'https://www.lkuaiy.com' }
        ]
      }
    ],
    sidebar: {
      '/starter/': getStarterSidebar('前言', '官方教程', '入门'),
      '/component/': getComponentSidebar('组件'),
      '/library/': getLibrarySidebar('类库')
    }
  }
});

function getStarterSidebar(groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      icon: 'intro',
      collapsable: false,
      children: ['', 'release']
    },
    {
      title: groupB,
      icon: 'starter',
      collapsable: false,
      children: [
        'official-object',
        {
          title: '类库模块的封装(普通用户无需了解)',
          collapsable: false,
          children: ['official-vcom']
        },
        'step-by-step-program'
      ]
    },
    {
      title: groupB,
      icon: 'starter',
      collapsable: false,
      children: ['install', 'first-program', 'analyse-first-program']
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
