import mediumZoom from 'medium-zoom'
import { useData, useRoute } from 'vitepress'
import Theme, { VPBadge } from 'vitepress/theme'
import { h, nextTick, onMounted, toRefs, watch } from 'vue'
import SponsorsAside from './components/SponsorsAside.vue'
import ZoomImg from './components/ZoomImg.vue'
import './fonts/fira_code/fira_code.css'
import './styles/var.css'

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
  },
  enhanceApp({ app }) {
    app.component('Badge', VPBadge)
    app.component('ZoomImg', ZoomImg)
  },
}
