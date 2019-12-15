declare interface createConfig {
    // 创建绘图板的容器
    view ?: any,
    // 是否显示菜单栏
    showMenu ?: boolean,
    // 菜单栏位置
    menuDirection ?: string,
    // 菜单栏项目
    menuItems ?: Array<string>,
    // 是否显示工具栏
    showTools ?: boolean,
    // 工具栏位置
    toolsDirection ?: string,
    // 工具栏项目(和excludeToolsItems一同配置时，只有该选项生效)
    toolsItems ?: Array<string>
    // 不显示的工具栏项目
    excludeToolsItems ?: Array<string>,
    // 绘图板默认底色(默认白色，透明度100%)
    background ?: panelConfig
}

declare interface menuConfig {

}

declare interface toolsConfig {

}

declare interface panelConfig {
    backgroundColor: string,
    opacity: number,
    backgroundImage: string
}