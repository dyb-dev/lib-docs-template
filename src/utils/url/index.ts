/*
 * @Author: dyb
 * @Date: 2024-06-28 14:19:02
 * @LastEditors: dyb
 * @LastEditTime: 2024-08-15 20:43:52
 * @FilePath: /vitepress练习/src/utils/url/index.ts
 * @Description: url模块
 */

/**
 * 拼接资源路径
 *
 * @author dyb
 * @date 28/06/2024/  14:25:30
 * @export
 * @param {string} subPath - 子路径
 * @returns {*}  {string} - 根据 `import.meta.env.VITE_PROJECT_ASSETS_DIR` 拼接后的资源路径
 */
export function spliceAssetsPath(subPath: string): string {

    if (!subPath) {

        throw new Error("spliceAssetsPath() =>> partPath参数为空")

    }

    if (typeof subPath !== "string") {

        throw new Error(`spliceAssetsPath() =>> partPath参数类型错误:${typeof subPath}`)

    }

    // 如果 partPath 不以斜杠开头，则添加斜杠
    if (!subPath.startsWith("/")) {

        subPath = `/${subPath}`

    }

    let _path = `${subPath}?version=${__PROJECT_INFO__.version}`

    /** 项目资源目录前缀 */
    const _projectAssetsDirPrefix = __PROJECT_INFO__.env.VITE_PROJECT_ASSETS_DIR_PREFIX

    // 如果存在项目资源目录前缀，则拼接
    if (_projectAssetsDirPrefix) {

        _path = `${_projectAssetsDirPrefix}${_path}`

    }
    return _path

}

/**
 * 根据开关移除 url 的斜杠
 *
 * @author dyb
 * @date 23/07/2024/  20:28:05
 * @export
 * @param {string} url - 需要处理的url
 * @param {object} [options={}] - 配置项
 * @param {boolean} [options.isStart=false] - 是否移除开头的斜杠
 * @param {boolean} [options.isEnd=false] - 是否移除结尾的斜杠
 * @returns {string} - 处理后的url
 */
export function removeSlashBySwitch(url: string, options: { isStart?: boolean; isEnd?: boolean } = {}): string {

    const { isStart = false, isEnd = false } = options

    let _tempUrl = url
    if (isStart) {

        _tempUrl = _tempUrl.replace(/^\//, "")

    }
    if (isEnd) {

        _tempUrl = _tempUrl.replace(/\/$/, "")

    }
    return _tempUrl

}

/**
 * 获取当前地址
 *
 * @author Evil
 * @date 14/06/2023/  00:57:34
 * @export
 * @memberof  Cgl
 * @returns {string} 当前地址, 默认返回值:> http://localhost/
 * @alias Cgl.Url.GetCurUrl
 * @example
 * ```ts
 * console.log(getCurUrl()) // http://localhost/
 * ```
 */
export function getCurUrl(): string {

    if (typeof location !== "undefined") {

        return location.href

    }

    return "http://localhost/"

}

/**
 * 判断是否是绝对路径
 *
 * @author dyb
 * @date 17/04/2023/  09:55:55
 * @param {string} str 需要判断的字符串
 * @returns {boolean} 是否是绝对路径
 */
export function isAbsoluteUrl(str: string): boolean {

    // 定义正则表达式
    const pattern = /(?:(([\w-]+:)\/\/))[^\\/]+/
    // 使用test方法进行匹配，返回匹配结果
    return pattern.test(str)

}

/**
 * 获取指定URL的子目录
 *
 * @author dyb
 * @date 23/07/2024/  20:32:18
 * @export
 * @param {string} [url=location.href] - 需要解析的 URL
 * @returns {*}  {string}
 */
export function getSubdirectoryFromUrl(url: string = getCurUrl()): string {

    if (!isAbsoluteUrl(url)) {

        return ""

    }

    const urlObj = new URL(url)
    const { pathname } = urlObj

    // 移除开头的斜杠
    const sanitizedPathname = pathname.startsWith("/") ? pathname.slice(1) : pathname

    // 获取最后一个斜杠之前的内容
    const subdirectory = sanitizedPathname.slice(0, sanitizedPathname.lastIndexOf("/"))

    return subdirectory

}
