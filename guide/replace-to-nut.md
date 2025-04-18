# 替换为 NutUI

由于框架默认使用的是 Vant 组件库，并且演示源码中大量示例也使用了 Vant，如果你需要使用 [NutUI](https://nutui.jd.com/h5/vue/4x)，请拉取框架源码分支，或者到 [Github Releases](https://github.com/fantastic-mobile/basic/releases) 页面下载框架源码压缩包。

专业版用户也同样，请到专业版仓库下载框架源码。

## 安装

```sh
# 安装依赖
pnpm install

# 安装 NutUI
pnpm add @nutui/nutui @nutui/touch-emulator
```

## 代码调整

::: details 基础版

整体修改 `/src/ui-provider/index.ts` 文件

```ts
import type { App } from 'vue'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/style.css'
import '@nutui/touch-emulator'

function install(app: App) {
  app.use(NutUI)
}

export default { install }
```

整体修改 `/src/ui-provider/index.vue` 文件

```vue
<script setup lang="ts">
import { Locale } from '@nutui/nutui'
import zhCN from '@nutui/nutui/dist/packages/locale/lang/zh-CN'
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()

Locale.use('zh-CN', zhCN)
</script>

<template>
  <NutConfigProvider :theme="settingsStore.currentColorScheme" class="min-h-vh supports-[(min-height:100dvh)]:min-h-dvh">
    <slot />
  </NutConfigProvider>
</template>
```

:::

::: details 专业版

整体修改 `/src/ui-provider/index.ts` 文件

```ts
import type { App } from 'vue'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/style.css'
import '@nutui/touch-emulator'
import zhCN from '@nutui/nutui/dist/packages/locale/lang/zh-CN'
import enUS from '@nutui/nutui/dist/packages/locale/lang/en-US'

function install(app: App) {
  app.use(NutUI)
}

// 此处的对象属性和 src/locales/index.ts 中的 messages 对象属性一一对应
const locales: Record<string, any> = {
  'zh-cn': zhCN,
  'en-us': enUS,
}

export default { install }
export { locales }
```

整体修改 `/src/ui-provider/index.vue` 文件

```vue
<script setup lang="ts">
import { Locale } from 'vant'
import { locales } from './index'
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()

watch(() => settingsStore.lang, () => {
  Locale.use(settingsStore.lang, locales[settingsStore.lang])
})
</script>

<template>
  <NutConfigProvider :theme="settingsStore.currentColorScheme" class="min-h-vh supports-[(min-height:100dvh)]:min-h-dvh">
    <slot />
  </NutConfigProvider>
</template>
```

:::

## 修改登录页

由于登录页使用了 Vant 组件，并且删除会导致框架无法正常使用，所以此处需要开发者自行修改或者重新制作登录页，或者也可以参考下方示例中已经修改好的登录页。

## 卸载

```sh
# 卸载 Vant
pnpm remove vant @vant/touch-emulator
```

## 完成

至此，你已经将框架中的 Vant 组件库替换为 NutUI 组件库，并且可以开始使用 NutUI 进行业务开发了。

## 示例

如果对上述的步骤还有不清楚的地方，可以访问[此仓库](https://github.com/fantastic-mobile/nut-example)查看示例源码，以及[此链接](https://fantastic-mobile.hurui.me/nut-example/)查看示例网站。

![](/ui-nut.png){data-zoomable}
