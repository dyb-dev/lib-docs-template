/*
 * @Author: dyb-dev
 * @Date: 2024-10-16 00:55:19
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-08-02 19:08:12
 * @FilePath: /lib-docs-template/src/utils/env/index.ts
 * @Description: 环境相关工具函数
 */

import { getCurrentUrlQueryValue } from "@/utils"

/**
 * FUN: 是否为客户端环境
 *
 * @author dyb-dev
 * @date 2025-07-21 21:41:48
 * @returns {*}  {boolean} 是否为客户端环境
 */
export const isClientEnv = (): boolean => typeof window !== "undefined" && typeof document !== "undefined"

/**
 * FUN: 是否为开发环境
 *
 * @author dyb-dev
 * @date 09/10/2024/  17:34:47
 * @returns {*}  {boolean} 是否为开发环境
 */
export const isDevEnv = (): boolean => import.meta.env.DEV

/** LET: 是否已启用调试模式 */
let _debug: boolean = false

/**
 * FUN: 是否已启用调试模式
 *
 * @author dyb-dev
 * @date 23/05/2023/  13:58:40
 * @returns {boolean} 是否已启用调试模式
 */
export const isEnableDebug = (): boolean => {

    // 未启用调试模式时
    if (!_debug) {

        _debug = getCurrentUrlQueryValue("debug") === "1"

    }

    return _debug

}
