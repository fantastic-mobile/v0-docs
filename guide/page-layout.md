# PageLayout 组件

`<PageLayout>` 组件是本框架区别于其他 H5 框架的最重要的特性。它提供了页面整体布局的基础，包括顶部导航栏、顶部标签栏、返回顶部、记录滚动位置等特性。

## 基本用法

```vue
<template>
  <PageLayout :navbar="false" tabbar copyright>
    <!-- ... -->
  </PageLayout>
</template>
```

本组件不是一个可以随处使用的组件，它必须应用在根节点，并且一个页面里只能有一个 `<PageLayout>` 组件。

## Props

| 参数                                                                                           | 说明                                                                                     | 类型              | 可选值                                     | 默认值 |
| :--------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :---------------- | :----------------------------------------- | :----- |
| titleCenter <Badge type="pro" text="专业版" />                                                 | 导航栏标题是否居中                                                                       | boolean           | -                                          | true   |
| navbar                                                                                         | 是否启用导航栏，默认使用应用配置 `navbar.enable`                                         | boolean           | -                                          | -      |
| navbarMode <Badge type="pro" text="专业版" />                                                  | 导航栏模式，默认使用应用配置 `navbar.mode`                                               | string            | static / fixed / show-hide-fixed / sticky  | -      |
| navbarStartSide <Badge type="pro" text="专业版" />                                             | 从预设中设置展示在导航栏左侧的图标按钮                                                   | string / string[] | back / home / forward / i18n / colorScheme | -      |
| navbarEndSide <Badge type="pro" text="专业版" />                                               | 从预设中选择展示在导航栏右侧的图标按钮                                                   | string / string[] | back / home / forward / i18n / colorScheme | -      |
| tabbar                                                                                         | 是否启用标签栏，默认使用应用配置 `tabbar.enable`                                         | boolean           | -                                          | -      |
| tabbarName <Badge type="pro" text="专业版" />                                                  | 标签栏名称，如果应用配置里配置了多套标签栏，需设置当前页面使用哪套标签栏，默认使用第一套 | string            | -                                          | -      |
| copyright                                                                                      | 是否展示底部版权信息，默认使用应用配置 `copyright.enable`                                | boolean           | -                                          | -      |
| backTop                                                                                        | 是否启用返回顶部按钮，默认使用应用配置 `app.enableBackTop`                               | boolean           | -                                          | -      |
| savedPosition <Badge type="pro" text="专业版" />                                               | 是否记忆滚动位置（前提条件：需开启页面缓存）                                             | boolean           | -                                          | -      |
| scrollTop <Badge type="pro" text="专业版" /> <Badge type="tip" text="v0.2.0 新增" />           | 设置竖向滚动条位置                                                                       | number            | -                                          | -      |
| scrollLeft <Badge type="pro" text="专业版" /> <Badge type="tip" text="v0.2.0 新增" />          | 设置横向滚动条位置                                                                       | number            | -                                          | -      |
| scrollWithAnimation <Badge type="pro" text="专业版" /> <Badge type="tip" text="v0.2.0 新增" /> | 是否在设置滚动条位置时使用动画过渡                                                       | boolean           | -                                          | -      |

## Slots

| 插槽名       | 说明               |
| :----------- | :----------------- |
| -            | 页面区域           |
| navbar       | 导航栏标题区域     |
| navbar-start | 导航栏左侧图标区域 |
| navbar-end   | 导航栏右侧图标区域 |
| tabbar       | 标签栏区域         |

## Events

| 事件名                                              | 说明                 |
| :-------------------------------------------------- | :------------------- |
| scroll                                              | 页面滚动时触发       |
| reachTop <Badge type="tip" text="v0.2.0 新增" />    | 页面滚动到顶部时触发 |
| reachBottom <Badge type="tip" text="v0.2.0 新增" /> | 页面滚动到底部时触发 |

## 导航栏

### enable

可以将导航栏全局开启，这样所有页面默认都会显示导航栏。

```ts {2-4}
const globalSettings: Settings.all = {
  navbar: {
    enable: true,
  },
}
```

或者也可以提供一段正则表达式，例如下面这段配置表示页面在微信环境下默认不显示导航栏：

```ts {2-4}
const globalSettings: Settings.all = {
  navbar: {
    enable: !/MicroMessenger/i.test(window.navigator.userAgent),
  },
}
```

### mode <Badge type="pro" text="专业版" />

全局设置导航栏模式，默认为 `static`

- `'static'` 静止，跟随页面滚动
- `'fixed'` 固定，不跟随页面滚动，始终固定在顶部
- `'show-hide-fixed'` 显隐固定，默认隐藏，页面滚动时显示
- `'sticky'` 粘性，页面往下滚动时隐藏，往上滚动时显示

```ts {2-4}
const globalSettings: Settings.all = {
  navbar: {
    mode: 'fixed',
  },
}
```

## 标签栏

### enable

可以将标签栏全局开启，这样所有页面默认都会显示标签栏。

```ts {2-4}
const globalSettings: Settings.all = {
  tabbar: {
    enable: true,
  },
}
```

### list

标签栏展示数据：

```ts {2-15}
const globalSettings: Settings.all = {
  tabbar: {
    list: [
      {
        path: '/',
        icon: 'i-ic:sharp-home',
        text: '主页',
      },
      {
        path: '/user',
        icon: 'i-ic:baseline-person',
        text: '我的',
      },
    ],
  },
}
```

专业版支持配置多套标签栏，然后通过 `tabbarName` 属性指定当前页面使用哪套标签栏：

```ts {2-35}
const globalSettings: Settings.all = {
  tabbar: {
    list: [
      {
        name: 'tabbar1',
        list: [
          {
            path: '/',
            icon: 'i-ic:sharp-home',
            text: '主页',
          },
          {
            path: '/user',
            icon: 'i-ic:baseline-person',
            text: '我的',
          },
        ],
      },
      {
        name: 'tabbar2',
        list: [
          {
            path: '/list',
            icon: 'i-ic:sharp-list',
            text: '列表',
          },
          {
            path: '/setting',
            icon: 'i-ic:sharp-settings',
            text: '设置',
          },
        ],
      },
    ],
  },
}
```

```vue {2}
<template>
  <PageLayout tabbar-name="tabbar2">
    <!-- ... -->
  </PageLayout>
</template>
```

#### path

跳转路由地址

|  类型  | 默认值 | 说明         |
| :----: | :----: | :----------- |
| string |   /    | 跳转路由地址 |

#### icon

|  类型  | 默认值 | 说明     |
| :----: | :----: | :------- |
| string |   /    | 显示图标 |

该项配置最终会通过 `<SvgIcon />` 组件进行展示，意味着你可以使用自定义图标，也可使用 Iconify 提供的图标，详细可阅读《[图标](./svg-icon)》。

#### activeIcon <Badge type="pro" text="专业版" />

|  类型  | 默认值 | 说明           |
| :----: | :----: | :------------- |
| string |   /    | 激活时显示图标 |

该项配置最终会通过 `<SvgIcon />` 组件进行展示，意味着你可以使用自定义图标，也可使用 Iconify 提供的图标，详细可阅读《[图标](./svg-icon)》。

#### text

|  类型  | 默认值 | 说明     |
| :----: | :----: | :------- |
| string |   /    | 显示文字 |

#### badge <Badge type="pro" text="专业版" />

设置不同的类型值，展示效果也会不同。

- `boolean` 展示形式为点，当值为 false 时隐藏
- `number` 展示形式为文本，当值小于等于 0 时隐藏
- `string` 展示形式为文本，当值为空时隐藏

如果标记需要动态更新，请设置为箭头函数形式，并返回外部变量，例如搭配 pinia 一起使用。

```ts
badge: () => globalStore.number
```
