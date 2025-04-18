# 准备工作

## 源码

阅读开发文档前，请确保手上已经有 Fantastic-mobile 源码，因为文档中提及的内容，都是需要在本地项目中编写或修改代码并运行才能呈现的。

:::tip 源码分为两种：
- **框架源码** 不含示例代码，可直接用于实际开发
- **演示源码** 同演示站，在框架源码基础上，提供了大量示例代码
:::

## 开发环境

使用本框架前，需要在本地依次安装好 [Node.js](https://nodejs.org/), [pnpm](https://pnpm.io/zh/), [Git](https://git-scm.com/)(非必须) 和 [Visual Studio Code](https://code.visualstudio.com/)。

::: warning 注意
在 [package.json](https://github.com/fantastic-mobile/basic/blob/main/package.json#L4-L6) 文件中有限制 node 要求版本，建议使用最新 LTS 版本。
:::

然后在 Visual Studio Code 里安装好以下扩展：

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

在 Visual Studio Code 里打开源码文件夹，右下角会自动提示需要安装的依赖，直接点击安装即可。

![](/vscode.png){data-zoomable}

::: tip 额外推荐
以上为开发时必备扩展，以下则是作者推荐安装的扩展，安装它们将在一定程度上提升开发效率。

- [Chinese (Simplified) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) 中文语言包
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) 在代码中高亮颜色
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) 高亮显示匹配的标签
- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) 图片预览
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) 彩虹缩进提示
:::

## 技术栈

了解并熟悉框架使用到的技术栈，能让你使用本框架更得心应手。

- [Vite](https://cn.vitejs.dev/)
- [Vue 3](https://cn.vuejs.org/) ([v3 迁移指南](https://v3-migration.vuejs.org/))
- [Vue Router](https://router.vuejs.org/zh/) ([unplugin-vue-router](https://github.com/posva/unplugin-vue-router) 基于文件的类型化路由)
- [Pinia](https://pinia.vuejs.org/zh/)
- [UnoCSS](https://unocss.dev/)
