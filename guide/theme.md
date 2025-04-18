# 主题

## 框架主题

主题配色存放在 `/themes/index.ts` 文件中，基础版和专业版内容略有不同。

### 基础版

```ts
import { hex2rgba } from '@unocss/preset-mini/utils'

export const lightTheme = {
  // 颜色主题
  'color-scheme': 'light',
  // 内置 UI
  '--ui-primary': hex2rgba('#0f0f0f')!.join(' '),
  '--ui-text': hex2rgba('#fcfcfc')!.join(' '),
  // 主体
  '--g-bg': '#f2f2f2',
  '--g-container-bg': '#fff',
  '--g-border-color': '#DCDFE6',
  // 导航栏
  '--g-navbar-bg': '#fff',
  '--g-navbar-color': '#0f0f0f',
  // 标签栏
  '--g-tabbar-bg': '#fff',
  '--g-tabbar-color': '#6f6f6f',
  '--g-tabbar-active-color': '#0f0f0f',
}

export const darkTheme = {
  // 颜色主题
  'color-scheme': 'dark',
  // 内置 UI
  '--ui-primary': hex2rgba('#e5e5e5')!.join(' '),
  '--ui-text': hex2rgba('#242b33')!.join(' '),
  // 主体
  '--g-bg': '#0a0a0a',
  '--g-container-bg': '#141414',
  '--g-border-color': '#15191e',
  // 导航栏
  '--g-navbar-bg': '#141414',
  '--g-navbar-color': '#e5e5e5',
  // 标签栏
  '--g-tabbar-bg': '#141414',
  '--g-tabbar-color': '#6f6f6f',
  '--g-tabbar-active-color': '#e5e5e5',
}
```

### 专业版

与基础版不同，专业版默认提供了 12 款主题，明亮和暗黑模式各 6 款，并且主题在运行时共存，可实现动态切换。

```ts
import { hex2rgba } from '@unocss/preset-mini/utils'

export default {
  light: {
    // 颜色主题
    'color-scheme': 'light',
    // 内置 UI
    '--ui-primary': hex2rgba('#0f0f0f')!.join(' '),
    '--ui-text': hex2rgba('#fcfcfc')!.join(' '),
    // 主体
    '--g-bg': '#f2f2f2',
    '--g-container-bg': '#fff',
    '--g-border-color': '#DCDFE6',
    // 导航栏
    '--g-navbar-bg': '#fff',
    '--g-navbar-color': '#0f0f0f',
    // 标签栏
    '--g-tabbar-bg': '#fff',
    '--g-tabbar-color': '#6f6f6f',
    '--g-tabbar-active-color': '#0f0f0f',
  },
  ...
  dark: {
    // 颜色主题
    'color-scheme': 'dark',
    // 内置 UI
    '--ui-primary': hex2rgba('#e5e5e5')!.join(' '),
    '--ui-text': hex2rgba('#242b33')!.join(' '),
    // 主体
    '--g-bg': '#0a0a0a',
    '--g-container-bg': '#141414',
    '--g-border-color': '#15191e',
    // 导航栏
    '--g-navbar-bg': '#141414',
    '--g-navbar-color': '#e5e5e5',
    // 标签栏
    '--g-tabbar-bg': '#141414',
    '--g-tabbar-color': '#6f6f6f',
    '--g-tabbar-active-color': '#e5e5e5',
  },
  ...
}
```

![](/theme.gif){data-zoomable}

如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题。

```ts
import { hex2rgba } from '@unocss/preset-mini/utils'

export default {
  newThemeName: { // 主题名称
    // 颜色主题
    'color-scheme': 'light',
    // 内置 UI
    '--ui-primary': hex2rgba('#0f0f0f')!.join(' '),
    '--ui-text': hex2rgba('#fcfcfc')!.join(' '),
    // 主体
    '--g-bg': '#f2f2f2',
    '--g-container-bg': '#fff',
    '--g-border-color': '#DCDFE6',
    // 导航栏
    '--g-navbar-bg': '#fff',
    '--g-navbar-color': '#0f0f0f',
    // 标签栏
    '--g-tabbar-bg': '#fff',
    '--g-tabbar-color': '#6f6f6f',
    '--g-tabbar-active-color': '#0f0f0f',
  },
}
```

最后在应用配置中使用该主题：

```ts {2-5}
const globalSettings: Settings.all = {
  app: {
    // 如果主题是暗黑模式下使用的，则 darkTheme: 'newThemeName'
    lightTheme: 'newThemeName',
  },
}
```

## 颜色方案

在应用配置中设置：

```ts {2-9}
const globalSettings: Settings.all = {
  app: {
    /**
     * 留空跟随系统
     * light 明亮模式
     * dark 暗黑模式
     */
    colorScheme: '',
  },
}
```

## 哀悼模式 <Badge type="tip" text="v0.2.0 新增" />

在应用配置中设置：

```ts {2-9}
const globalSettings: Settings.all = {
  app: {
    enableMournMode: true,
  },
}
```

## 色弱模式 <Badge type="tip" text="v0.2.0 新增" />

在应用配置中设置：

```ts {2-9}
const globalSettings: Settings.all = {
  app: {
    enableColorAmblyopiaMode: true,
  },
}
```

## 开发注意

如果只在明亮或暗黑模式中，选择其中一种模式进行业务开发，那没有什么需要注意的，你可以按照以往的开发习惯进行开发，这也是框架推荐的方式。

但如果需要让用户可以自己选择明亮或暗黑模式，或者是根据浏览器主题来判断是使用明亮还是暗黑模式。这时候开发则需要注意，业务页面里使用到的颜色将不能写成固定值（例如 color 、background-color 、border-color 、box-shadow 等有涉及到颜色的属性），因为同一个色值是无法顾及到明亮和暗黑两种模式的。

这时候我们建议使用 UnoCSS 进行样式编写，例如 `text-dark dark-text-white` 、`bg-green dark-bg-red` 。如果你不习惯使用 UnoCSS ，那也可以使用下面这种方法，在页面中去自定义一些颜色。

```scss
div {
  color: #000;

  [data-theme="dark"] & {
    color: #fff;
  }
}
```

最后分享一篇关于暗黑模式的文章《[教你巧用UI设计中的暗黑模式——Dark Mode](http://www.woshipm.com/pd/4105894.html)》，希望帮助你更好地在暗黑模式下开发出优秀的页面。
