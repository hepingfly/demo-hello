import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的博客",
  description: "记录技术与生活的个人博客",

  // 如果你的仓库名不是 username.github.io，需要设置 base
  // base 格式为 '/仓库名/'
  base: '/myblog/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts/' },
      { text: '关于', link: '/about/' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '博客文章',
          items: [
            { text: '开始使用 VitePress', link: '/posts/getting-started' },
            { text: '我的第一篇博客', link: '/posts/my-first-post' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hepingfly/myblog' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2025-present'
    },

    // 启用最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // 搜索
    search: {
      provider: 'local'
    }
  },

  // 启用最后更新时间戳
  lastUpdated: true,

  // Markdown 配置
  markdown: {
    lineNumbers: true
  }
})
