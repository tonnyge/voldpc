const { config } = require('vuepress-theme-hope');

module.exports = config({
  title: '火山软件开发平台文档',
  description: '火山软件开发平台文档，带你走进火山软件开发平台的大门',
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
    mdEnhance: { lineNumbers: false, align: true, mark: true, sub: true, sup: true },
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
    nav: [
      { text: '基础资料', link: '/basic/' },
      {
        text: '友链',
        icon: 'link',
        items: [
          { text: '易之园资源站', link: 'https://www.eyyzy.com' },
          { text: '世恒教育', link: 'http://www.shteach.com' }
        ]
      }
    ],
    sidebar: {
      '/basic/': [
        {
          title: '基础资料',
          collapsable: false,
          children: [
            'release',
            {
              title: '火山程序开发基础',
              collapsable: false,
              children: ['object', 'vol_object', 'homeland']
            }
          ]
        }
      ]
    }
  }
});
