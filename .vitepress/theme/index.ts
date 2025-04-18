import { h, nextTick, onMounted, toRefs, watch } from 'vue'
import Theme, { VPBadge } from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'
import './fonts/fira_code/fira_code.css'
import './styles/var.css'
import mediumZoom from 'medium-zoom'
import SponsorsAside from './components/SponsorsAside.vue'
import ZoomImg from './components/ZoomImg.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'aside-bottom': () => h(SponsorsAside),
    })
  },
  setup() {
    // 获取前言和路由
    const { frontmatter } = toRefs(useData())
    const route = useRoute()

    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => initZoom())
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )

    // 评论组件 - https://giscus.app/
    giscusTalk({
      repo: 'fantastic-mobile/fantastic-mobile.github.io',
      repoId: 'R_kgDOL53UCw',
      category: 'Announcements', // 默认: `General`
      categoryId: 'DIC_kwDOL53UC84CfRvQ',
      mapping: 'pathname', // 默认: `pathname`
      inputPosition: 'top', // 默认: `top`
      lang: 'zh-CN', // 默认: `zh-CN`
      lightTheme: 'light', // 默认: `light`
      darkTheme: 'transparent_dark', // 默认: `transparent_dark`
      loading: true,
    }, {
      frontmatter,
      route,
    },
    // 是否全部页面启动评论区。
    // 默认为 true，表示启用，此参数可忽略；
    // 如果为 false，表示不启用。
    // 可以在页面使用 `comment: true` 前言单独启用
    true)
  },
  enhanceApp({ app }) {
    app.component('Badge', VPBadge)
    app.component('ZoomImg', ZoomImg)
  },
}
