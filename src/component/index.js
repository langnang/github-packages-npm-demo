// 导入组件，组件必须声明 name
import DemoComponent from './index.vue'

// 为组件提供 install 安装方法，供按需引入
DemoComponent.install = function (Vue) {
  Vue.component(DemoComponent.name, DemoComponent)

}

// 默认导出组件
export default DemoComponent