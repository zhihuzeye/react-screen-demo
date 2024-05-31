pnpm create vite my-react-app --template react-ts

## 一、项目描述

- 一个基于 React、TypeScript、Vite、Redux、DataV、ECharts 框架的 " **数据大屏项目** "。支持数据动态刷新渲染、屏幕适配、数据请求模拟、局部样式、图表自由替换/复用等功能。

- 项目全屏展示点击右上角全屏按钮或（按 F11）。
- 项目环境：react@18.2.0、typescript@5.2.2、vite@5.2.0、echarts@5.5.0、pnpm@7.27.0、node@v16.18.1。

友情链接：
1.  [React 官方文档](https://react.docschina.org/docs/introducing-jsx.html)
2.  [高德 自定义地图](https://geohub.amap.com/mapstyle/index)
3.  [Mockjs 官方文档](http://mockjs.com/)
4.  [DataV 官方文档](http://datav-react.jiaminghi.com/guide/)
5.  [echarts 实例](https://echarts.apache.org/examples/zh/index.html)，[echarts API文档](https://echarts.apache.org/zh/api.html#echarts)

## 二、文件目录介绍

```shell
Project
├─.eslintrc.cjs ----------- // eslint 配置
├─.gitignore -------------- // git 控制文件
├─custom.d.ts ------------- // 自定义类型声明
├─index.html -------------- // 主页面
├─mock -------------------- // 模拟数据
├─package.json ------------ // 项目信息+依赖包
├─pnpm-lock.yaml ---------- // 锁定依赖包
├─README.md --------------- // 说明文档
├─src 
│ ├─App.module.css 
│ ├─App.tsx --------------- // App 入口
│ ├─assets ---------------- // 静态资源
│ ├─components 
│ │ ├─AutoScale ----------- // 自动缩放 HOC
│ │ ├─index.ts 
│ │ └─ScaleContainer ------ // 缩放容器 HOC
│ ├─hooks 
│ │ └─useFullscreen.ts ---- // 控制全屏 Hooks
│ ├─index.css 
│ ├─main.tsx -------------- // 主入口
│ ├─redux ----------------- // redux 相关
│ ├─services -------------- // 服务端相关配置文件
│ ├─utils ----------------- // 工具函数
│ ├─views ----------------- // 页面
│ └─vite-env.d.ts 
├─tsconfig.json ----------- // ts 配置文件
├─tsconfig.node.json ------ // node ts 配置文件
└─vite.config.ts ---------- // vite 配置文件
```

## 三、详情介绍

### 启动项目

需要提前安装好 `nodejs` 与 `pnpm`，下载项目后在项目主目录下运行 `pnpm install` 拉取依赖包，使用命令 `pnpm dev` 启动项目。

### 数据请求模拟

项目采用 Mockjs 模拟数据方式，配置在 `mock` 文件夹中，Mockjs 使用方法请查阅 [Mockjs文档](http://mockjs.com/)，主入口文件 main.tsx 引入 mock 文件。

接口 API 请求地址写在 `services/api.service.ts` 中，由 `@reduxjs/toolkit createAsyncThunk` 创建异步 Thunk 发起请求。

页面通过 `useDispatch` 发起请求，`useSelector` 接收数据。

### 图表组件

图表组件主要使用了 ECharts 和 DataV 可视化框架来进行开发。图表配置文件在 `views/components/*/options.ts` 中，数据由各个组件请求后导入。ECharts 渲染函数统一封装在了 `utils/chart.js` 中。

### 样式编写

样式编写使用了 `CSS in JS (JSS)` ，使样式具有组件级别的作用域，避免了全局样式污染的问题。
使用示例：
1. 将 css 文件名修改为 xxx.module.css
2. 导入样式文件 import styles from './xxx.module.css'
3. 使用 styles.className
4. 定义 ts 类型文件
```js
// custom.d.ts
 declare module "*.css" {
    const css: { [key: string]: string }
    export default css
}
```
5. vscode 安装插件：typescript-plugin-css-modules
   - 作用：解析 css 文件，并生成 ts 对应的类型
   - 使用：在 tsconfig.json 配置 plugins 字段 [{"typescript-plugin-css-modules"}]
   - 在 项目根目录创建 .vscode 文件夹  创建 settings.json 文件
```js
// settings.json
{
    "typescript.tsdk": "node_modules/typescript/lib",
    "typescript.enablePromptUseWorkspaceTsdk": true
}
```

### 屏幕适配
本项目借助 HOC 高阶组件包裹，将大屏限制在 1920x1080 尺寸。通过动态计算缩放比例，实时控制容器缩放大小，具体代码请参阅。`components/AutoScale` 和 `components/ScaleContainer` 组件。

在编写大屏代码时，样式无需转换，按照设计稿 1920x1080 **1:1** 编写即可。

## 四、全屏控制
自定义 Hook（高阶组件）useFullscreen，用于控制页面全屏显示的功能，具体代码请参阅 `hooks/useFullscreen` 自定义钩子。

## 五、其它
这个项目是个人的作品，难免会有问题和 BUG。如果您发现任何问题，欢迎提出反馈和建议。我会尽力去更新和修复，并持续学习前端知识。非常感谢您的支持和理解！我很乐意与您交流，共同进步。