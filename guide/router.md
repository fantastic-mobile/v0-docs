# 路由

框架无需手动配置路由，而是基于文件系统自动生成路由，意味着开发者只需在 `/src/views/` 目录下创建文件，就会根据文件目录自动生成对应的路由，该能力由 [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) 提供。

## 配置规范

如果对 [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) 的规范还不了解，建议先阅读官方文档。框架在此基础上，预设了一些规范。以下面的目录结构为例：

```
目录结构                       路由地址                    路由 name

src/views/
├── _about
│   └── index.vue
├── example
│   ├── _test.vue
│   ├── components
│   │   └── dialog.vue
│   ├── svgicon.vue          /example/svgicon           /example/svgicon
│   └── index.vue            /example                   /example/
├── cart
│   ├── detail
│   │   └── [id].vue         /cart/detail/:id           /cart/detail/[id]
│   └── index.vue            /cart                      /cart/
├── news
│   ├── detail.[id].vue      /news/detail/:id           /news/detail.[id]
│   └── index.vue            /news                      /news/
├── [...all].vue             /:all(.*)                  /[...all]
├── index.vue                /                          /
└── login.vue                /login                     /login
```

通过上面的示例，可以看出几个规范：

- 文件夹或文件名开头为 `_` 的不会生成路由
- 所有 `components` 文件夹下的文件均不会生成路由
- `index.vue` 文件会生成一个空路由，例如 `/src/views/news/index.vue` -> `/news` 路由
- 路由参数通过 `[ ]` 将参数名包裹，例如 `/src/views/user_[id].vue` -> `/user_:id` 路由。设置可以添加多个参数 `/src/views/product_[skuId]_[seoDescription].vue`
- 路由 name 默认为文件路径，也可通过 `definePage()` 在 `.vue` 文件内设置并覆盖

::: warning 注意
默认生成的路由可能为嵌套路由，但为了用一套 API 统一处理页面缓存，框架会将所有路由均处理成一级路由，并在 `App.vue` 里处理缓存逻辑。意味着如果同时创建 `/src/views/users/index.vue` 和 `/src/views/users.vue` 组件，`/src/views/users/index.vue` 不会在 `/src/views/users.vue` 的 `<RouterView>` 中呈现。

这也意味着 `/src/views/users/detail/[id].vue` 和 `/src/views/users/detail.[id].vue` 生成的路由和行为都是一样的，只有路由 name 有区别。

这与 [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) 默认行为略有不同。
:::

## definePage()

通过 `definePage()` 可以修改路由对象或添加路由元信息：

```vue {2-7}
<script setup lang="ts">
definePage({
  name: 'example',
  meta: {
    title: '示例'
  },
})
</script>

<template>
  <!-- ... -->
</template>
```

:::danger 警告
不能在 `definePage()` 中使用变量，因为其传递的参数会在构建时提取并从 `<script setup>` 中删除。
:::

## 路由元信息

### title

|  类型  | 默认值 | 说明                     |
| :----: | :----: | :----------------------- |
| string |   /    | 浏览器及页面中展示的标题 |

支持设置 i18n 对应的 key 值，详细可阅读《[国际化](i18n)》。

### cache

|            类型             | 默认值 | 说明                 |
| :-------------------------: | :----: | :------------------- |
| boolean / string / string[] |   /    | 是否对该页面进行缓存 |

- `boolean` 设置为 true 时，该路由页面会被一直缓存
- `string` 设置某个目标路由的 name ，表示当前路由页面跳转到设置的 name 对应的路由页面时，则将当前路由页面进行缓存，否则不缓存
- `string[]` ，可设置一个目标路由的 name 数组

当类型为 `string` 或 `string[]` 时，可以更精细的去控制页面缓存的逻辑。例如从列表页进入详情页，则需要将列表页进行缓存；而从列表页进入其它页面，则无需将列表页进行缓存。详细可阅读《[页面缓存](keep-alive)》。

### noCache

|       类型        | 默认值 | 说明                                        |
| :---------------: | :----: | :------------------------------------------ |
| string / string[] |   /    | 是否对该页面清除缓存，需设置 cache 才会生效 |

- `string` 设置某个目标路由的 name ，表示当前路由页面跳转到设置的 name 对应的路由页面时，则将当前路由页面清除缓存，否则不清除缓存
- `string[]` ，可设置一个目标路由的 name 数组

该属性通常搭配 `cache: true` 使用，可以更精细的去控制页面取消缓存的逻辑。详细可阅读《[页面缓存](keep-alive)》。

### auth

|            类型             | 默认值 | 说明           |
| :-------------------------: | :----: | :------------- |
| boolean / string / string[] |   /    | 该路由访问权限 |

- `boolean` 设置为 `true` 时，该路由仅登录用户可访问
- `string` 设置某个权限的名称，表示当前路由仅允许具备该权限的用户可访问
- `string[]` 设置多个权限的名称数组，表示当前路由允许具备其中一个权限的用户可访问

当类型为 `string` 或 `string[]` 时，可以更精细的去控制页面权限，不具备访问权限则会显示 403 页面，详细可阅读《[权限 - 路由权限](permission#路由权限)》。
