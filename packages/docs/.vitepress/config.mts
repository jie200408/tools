import { defineConfig } from 'vitepress'
import { imgSize } from '@mdit/plugin-img-size'
import { figure } from '@mdit/plugin-figure'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

import Lumenpkg from '../../Lumen/package.json'
import Solispkg from '../../Solis/package.json'
const Lumenversion = `Lumen@` + Lumenpkg.version
const Solisversion = `Solis@` + Solispkg.version

export default defineConfig({
  title: 'TheoJS',
  description: '用于VitePress主题美化和集成Vue功能组件',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: 'https://tools.theojs.cn' },
  head: [
    ['link', { rel: 'icon', type: 'icon', href: '/Logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'author', content: 'Theo-Messi' }],
    ['meta', { name: 'copyright', content: 'Theo-Messi' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'evisit-after', content: '1 day' }],
    ['meta', { name: 'description', content: '用于VitePress主题美化和集成Vue功能组件' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:site_name', content: 'TheoJS' }],
    ['meta', { name: 'og:title', content: 'TheoJS' }],
    ['meta', { name: 'og:url', content: 'https://tools.theojs.cn/' }],
    ['meta', { name: 'og:image', content: 'https://tools.theojs.cn/Logo.png' }],
    ['meta', { name: 'og:description', content: '用于VitePress主题美化和集成Vue功能组件' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
    ['meta', { name: 'twitter:title', content: 'TheoJS' }],
    ['meta', { name: 'twitter:description', content: '用于VitePress主题美化和集成Vue功能组件' }],
    ['meta', { name: 'twitter:image', content: 'https://tools.theojs.cn/Logo.png' }],
    [
      'script',
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: 'https://tools.theojs.cn/',
          name: 'TheoJS',
          description: '用于VitePress主题美化和集成Vue功能组件',
          author: { '@type': 'Person', name: 'Theo-Messi' }
        })
      }
    ]
  ],
  markdown: {
    theme: { light: 'one-light', dark: 'one-dark-pro' },
    image: { lazyLoading: true },
    config: (md) => {
      md.use(imgSize)
      md.use(groupIconMdPlugin)
      md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true })
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          scss: 'vscode-icons:file-type-scss2',
          css: 'vscode-icons:file-type-css',
          所有主题: 'logos:typescript-icon',
          部分主题: 'logos:typescript-icon',
          单独导入: 'logos:typescript-icon'
        }
      })
    ],
    css: { preprocessorOptions: { scss: { api: 'modern' } } }
  },
  themeConfig: {
    logo: { src: '/Logo.png', width: 24, height: 24 },
    editLink: {
      pattern: 'https://github.com/Theo-Messi/tools/edit/main/packages/docs/:path',
      text: '为此页提供修改建议'
    },
    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本
    // 上次更新
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'full', timeStyle: 'full', hourCycle: 'h24' }
    },
    // 文章翻页
    docFooter: { prev: '上一篇', next: '下一篇' },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',

    // markdown 外部链接图标
    // externalLinkIcon: true,
    // 语言切换
    langMenuLabel: '切换语言',
    nav: [
      {
        text: '<span style="display: inline-flex; align-items: center;"><img src="/Logo.png" alt="logo" style="margin-right: 0.25rem;width:1em; height:1em; "/>Lumen</span>',
        link: '/',
        activeMatch: '^/guide/'
      },
      {
        text: '<span style="display: inline-flex; align-items: center;"><img src="https://i.theojs.cn/docs/202405101119004.png" alt="logo" style="margin-right: 0.25rem;width:1em; height:1em; "/>Solis</span>',
        link: '/solis',
        activeMatch: '^/solis/'
      },
      {
        text: '<i class="fas fa-bug" style="margin-right:0.25rem;color:#FF4500" alt="bug"></i>提交反馈',
        link: 'https://github.com/Theo-Messi/tools/issues'
      },
      {
        text: '<i class="fas fa-clipboard-list" style="margin-right:0.25rem; color:#FF6347" alt="clipboard-list"></i>变更日志',
        items: [
          {
            text: Lumenversion,
            link: `https://github.com/Theo-Messi/tools/releases/tag/${Lumenversion}`
          },
          {
            text: Solisversion,
            link: `https://github.com/Theo-Messi/tools/releases/tag/${Solisversion}`
          }
        ]
      }
    ],
    sidebar: {
      guide: {
        base: '/guide/',
        items: [
          {
            // text: '快速开始',
            items: [
              {
                text: '<i class="fas fa-bolt" style="margin-right:0.5rem;color: #63E6BE;"></i>快速开始',
                link: 'getting-started'
              }
            ]
          },
          {
            text: '配置',
            items: [
              {
                text: '<i class="fas fa-palette" style="margin-right:0.5rem;color: #f39c12;"></i>导入主题配色',
                link: 'theme'
              },
              {
                text: '<i class="fas fa-bullhorn" style="margin-right:0.5rem;color: #e74c3c;"></i>首页公告栏',
                link: 'Announcement'
              },
              {
                text: '<i class="fas fa-underline" style="margin-right:0.5rem;color: #3498db;"></i>首页下划线',
                link: 'HomeUnderline'
              },
              {
                text: '<i class="fas fa-cogs" style="margin-right:0.5rem;color: #2ecc71;"></i>页脚配置',
                link: 'HomeFooter'
              },
              {
                text: '<i class="fas fa-th-list" style="margin-right:0.5rem;color: #9b59b6;"></i>侧边栏链接',
                link: 'DocAsideLogo'
              },
              {
                text: '<i class="fas fa-video" style="margin-right:0.5rem;color: #e67e22;"></i>视频组件',
                link: 'DocVideoLink'
              },
              {
                text: '<i class="fas fa-id-card" style="margin-right:0.5rem;color: #1abc9c;"></i>链接卡片',
                link: 'LinkCard'
              },
              {
                text: '<i class="fas fa-share-alt" style="margin-right:0.5rem;color: #3498db;"></i>页面分享按钮',
                link: 'ShareButton'
              },
              {
                text: '<i class="fas fa-image" style="margin-right:0.5rem;color: #2ecc71;"></i>图片描述',
                link: 'Image-description'
              },
              {
                text: '<i class="fas fa-comments" style="margin-right:0.5rem;color: #3498db;"></i>Twikoo 评论',
                link: 'DocTwikoo'
              }
            ]
          }
        ]
      },
      solis: {
        base: '/solis/',
        items: [
          {
            // text: '快速开始',
            items: [
              {
                text: '<i class="fas fa-bolt" style="margin-right:0.5rem;color: #63E6BE;"></i>快速开始',
                link: 'getting-started'
              }
            ]
          },
          {
            text: '配置',
            items: [
              {
                text: '<i class="fas fa-sitemap" style="margin-right:0.5rem;color: #f39c12;"></i>项目结构',
                link: 'project-structure'
              },
              {
                text: '<i class="fas fa-cogs" style="margin-right:0.5rem;color: #e74c3c;"></i>配置VitePress',
                link: 'configure-vitepress'
              },
              {
                text: '<i class="fas fa-newspaper" style="margin-right:0.5rem;color: #1abc9c;"></i>文章配置',
                link: 'posts-settings'
              },
              {
                text: '<i class="fas fa-comments" style="margin-right:0.5rem;color: #3498db;"></i>Twikoo 评论',
                link: 'DocTwikoo'
              }
            ]
          }
        ]
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Theo-Messi/tools' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@theojs/lumen' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '关闭搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  selectKeyAriaLabel: '输入',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    }
  }
})
