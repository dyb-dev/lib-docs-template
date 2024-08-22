# Lib-Docs-Template

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/vuejs/vitepress)

## 项目简介

<!-- prettier-ignore-start -->

<!-- prettier格式化会自动在 `_blank` 前面加上斜杠导致语法失效，因此这里忽略 -->
Lib-Docs-Template 提供了一个库文档的基本模板，该项目基于 [VitePress](https://vitepress.dev/zh/){:target="_blank"} 构建，支持本地 HTTPS 服务和 PWA 功能。该模板预配置了一些常用的开发工具和插件，帮助你快速构建和发布文档。

<!-- prettier-ignore-end -->

## 功能特点

-   **VitePress**: 使用 VitePress 构建的文档系统，支持 Markdown 格式的文档编写。
-   **HTTPS 支持**: 默认启用 HTTPS 服务，确保本地开发时的安全性。
-   **PWA 功能**: 内置 PWA 支持，提供离线访问和缓存功能。
-   **Ant Design Vue**: 集成了 Ant Design Vue 组件库，用于构建丰富的文档页面。
-   **TypeScript 支持**: 内置 TypeScript 支持，帮助你在编写组件和文档时获得更好的类型检查和开发体验。
-   **ESLint 和 Stylelint**: 预配置了 ESLint 和 Stylelint，确保代码风格的一致性和代码质量。
-   **Prettier**: 集成 Prettier，用于自动格式化代码，保持代码整洁和一致。
-   **JSON 预览**: 集成了 vue3-json-viewer 插件，支持 JSON 数据的可视化预览。
-   **Vue 自动类型检查**: 使用 vue-tsc 插件，自动进行 Vue 组件的类型检查。
-   **源代码复制预览**: 支持源代码的预览和复制功能，通过 @vitepress-demo-preview 组件和插件实现。

## 安装与使用

你可以使用 npm、pnpm 或 yarn 等包管理器来安装项目依赖。推荐使用 pnpm 作为首选包管理器。在下面的示例中，我们默认使用 pnpm 进行演示：

### 环境要求

-   Node.js 版本 >= 18.0.0
-   如果包管理器为 pnpm，版本需 >= 8.15.5

### 环境变量配置

该模板项目支持通过 `.env` 文件配置 HTTPS 和 PWA 功能。你可以在 `.env` 文件中设置以下环境变量来启用或禁用这些功能：

-   `VITE_PROTOCOL`: 协议 默认为 `https`
-   `VITE_PWA`: 是否使用PWA 默认为 `true`

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

### 构建文档

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

## 许可证

本项目基于 `MIT 许可证` 开源。
