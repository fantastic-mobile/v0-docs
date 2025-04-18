# 常用 API

## 接口请求

详细可阅读《[与服务端交互 - 接口请求](axios#接口请求)》。

```ts
import api from '@/api'

api.get()
api.post()
```

## 鉴权

详细可阅读《[权限 - 鉴权函数](permission#鉴权函数)》。

```ts
const { auth, authAll } = useAuth()

auth()
authAll()
```

## 页面

### 刷新

```ts
const { reload } = useMainPage()

reload()
```

### 设置自定义标题 <Badge type="pro" text="专业版" />

```ts
const { setCustomTitle } = useMainPage()

setCustomTitle(title)
```

### 重置自定义标题 <Badge type="pro" text="专业版" />

```ts
const { resetCustomTitle } = useMainPage()

resetCustomTitle()
```

## 事件总线

基于 [mitt](https://github.com/developit/mitt) 简单封装，使用方法请查阅官方文档。

```ts
import eventBus from '@/utils/eventBus'

eventBus.on()
eventBus.emit()
eventBus.off()
```

## 日期 <Badge type="pro" text="专业版" />

基于 [dayjs](https://day.js.org/zh-CN/) 简单封装，使用方法请查阅官方文档。

```ts
import dayjs from '@/utils/dayjs'

dayjs()
```
