import taskLists from 'markdown-it-task-lists'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fantastic-mobile 官方文档',
  description: '自成一派的移动端 H5 框架，采用 Vue3 + Vite 技术栈。',
  lang: 'zh-CN',
  base: '/',
  head: [
    ['meta', { name: 'keywords', content: 'vue,vite,router,vuex,pinia,typescript,template,h5,mobile,移动端,模板' }],
    ['keywords', { content: 'vue,vite,router,vuex,pinia,typescript,template,h5,mobile,移动端,模板' }],
    ['description', { content: '自成一派的移动端 H5 框架，采用 Vue3 + Vite 技术栈。' }],
    ['script', {}, `
var _hmt = _hmt || [];
_hmt.push(['_requirePlugin', 'UrlChangeTracker', {
  shouldTrackUrlChange: function(newPath, oldPath) {
    return newPath && oldPath;
  }
}]);
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d7f6dd1733b48011a6bf797914549256";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
    `],
  ],
  markdown: {
    config: (md) => {
      md.use(taskLists)
    },
  },
  themeConfig: {
    logo: '/logo.png',
    footer: {
      copyright: 'Copyright © 2024-present Fantastic-mobile',
    },
    nav: [
      {
        text: '指南',
        link: '/guide/intro',
      },
      {
        text: '组件',
        link: '/components/index',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '文档说明', link: '/guide/intro' },
            { text: '为什么选择我们 ?', link: '/guide/why' },
            { text: '更新日志', link: '/guide/changelog' },
          ],
          collapsed: false,
        },
        {
          text: '入门',
          items: [
            { text: '准备工作', link: '/guide/ready' },
            { text: '开始', link: '/guide/start' },
            { text: '代码规范', link: '/guide/coding-standard' },
            { text: '配置', link: '/guide/configure' },
            { text: '开发者工具', link: '/guide/devtools' },
            { text: '路由', link: '/guide/router' },
            { text: '与服务端交互', link: '/guide/axios' },
            { text: '全局状态管理', link: '/guide/store' },
            { text: '资源', link: '/guide/resources' },
            { text: '图标', link: '/guide/svg-icon' },
            { text: '构建与预览', link: '/guide/build' },
          ],
          collapsed: false,
        },
        {
          text: '进阶',
          items: [
            { text: '浏览器适配', link: '/guide/viewport' },
            { text: 'PageLayout 组件', link: '/guide/page-layout' },
            { text: '登录', link: '/guide/login' },
            { text: '权限', link: '/guide/permission' },
            { text: '主题', link: '/guide/theme' },
            { text: '动态标题', link: '/guide/title' },
          ],
          collapsed: false,
        },
        {
          text: '高级',
          items: [
            { text: '页面缓存', link: '/guide/keep-alive' },
            { text: '国际化', link: '/guide/i18n' },
            { text: '常用 API', link: '/guide/api' },
            { text: '私有 Storage 数据', link: '/guide/storage' },
            { text: '页面水印', link: '/guide/watermark' },
            { text: '错误日志', link: '/guide/error-log' },
            { text: '自定义字体', link: '/guide/font' },
            { text: '使用 Composition API 开发', link: '/guide/vue3-composition-api' },
            {
              text: '替换 UI 组件库',
              items: [
                { text: '替换为 Varlet', link: '/guide/replace-to-varlet' },
                { text: '替换为 NutUI', link: '/guide/replace-to-nut' },
              ],
              collapsed: true,
            },
          ],
          collapsed: false,
        },
        {
          text: '其它',
          items: [
            { text: '框架更新', link: '/guide/upgrade' },
            { text: '常见问题', link: '/guide/q-a' },
          ],
          collapsed: false,
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '介绍', link: '/components/' },
          ],
        },
        {
          text: '扩展组件',
          items: [
            { text: 'Auth 鉴权', link: '/components/auth' },
            { text: 'PageMain 内容块', link: '/components/page-main' },
            { text: 'SvgIcon SVG图标', link: '/components/svg-icon' },
            { text: 'Trend 趋势标记', link: '/components/trend' },
            { text: 'Sparkline 迷你图', link: '/components/sparkline' },
          ],
        },
      ],
    },
    outline: 'deep',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
})
