/*
 * @Author: dyb
 * @Date: 2024-06-24 19:59:56
 * @LastEditors: dyb
 * @LastEditTime: 2024-08-15 17:01:04
 * @FilePath: /vitepress练习/.vitepress/theme/index.ts
 * @Description: 扩展主题、扩展vue应用配置文件
 */

// https://vitepress.dev/zh/guide/custom-theme
import { AntDesignContainer } from "@vitepress-demo-preview/component"
import DefaultTheme from "vitepress/theme"

import { setupServiceWorker } from "../../src/sw"

import Layout from "./Layout.vue"

import type { Theme } from "vitepress"

import "vue3-json-viewer/dist/index.css"
import "@vitepress-demo-preview/component/dist/style.css"
import "../../src/styles/index.scss"
import "./style.css"

export default {
    // 继承 VitePress 的默认主题
    extends: DefaultTheme,
    // 使用自定义的布局组件来替代默认的布局组件
    Layout: Layout,
    // 执行时机在 Vue 应用实例创建后但在挂载到 DOM 之前
    // app: Vue 应用实例 router: Vue Router 实例 siteData: 站点元数据
    // 用于扩展应用、注册路由守卫等等
    async enhanceApp({ app }) {

        app.component("demo-preview", AntDesignContainer)

        // 浏览器环境下
        if (typeof window !== "undefined") {

            /** TODO: 如果需要使用 PWA 则解开此段代码 */
            setupServiceWorker()

            // 获取URL查询参数实例
            const params = new URLSearchParams(window.location.search)

            // 根据debug参数判断是否加载vconsole
            if (params.get("debug") === "1") {

                const vconsole = await import("vconsole")
                window.vConsole = new vconsole.default()

            }

        }

    }
} satisfies Theme