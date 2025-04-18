# 介绍

框架提供一系列的组件方便快速开发。

## 基础组件

基础组件由 [Vant](https://vant-ui.github.io/vant) 提供。

:::warning 替换组件库
如果你不喜欢 Vant ，或者你想要将老项目迁移到 Fantastic-mobile 上，但老项目里使用的组件库并不是 Vant ，框架也提供了组件库替换移方案：

- 《[替换为 Varlet](/guide/replace-to-varlet)》
- 《[替换为 NutUI](/guide/replace-to-nut)》

如果你想使用的组件库不在上述方案中，可以通过参考任何一份方案，理解替换的整理思路，并自行替换，别担心会很复杂，我们已经将大部分工作做好了。
:::

## 内建组件

为了实现 UI 组件库可替换，框架内建了一些组件，这些组件仅服务于框架自身，所以不建议在业务页面内使用。但如果你需要对框架进行二次开发，并保证视觉上的一致性，这时候你就会需要用到它们。

内建组件存放在 `/src/ui-kit/` 目录下，并配置了使用时自动引入。

你也可以点击 [基础版](https://fantastic-mobile.hurui.me/basic-example/#/component/built-in) 或 [专业版](https://fantastic-mobile.hurui.me/pro-example/#/component/built-in) 查看内建组件示例页面。

## 扩展组件

扩展组件为框架封装的组件，组件源码完全开放，如果觉得用着不顺手，可以到 `/src/components/` 目录下找到对应组件自行修改。