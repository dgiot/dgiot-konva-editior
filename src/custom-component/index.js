import Vue from 'vue'
// const components = ['Picture', 'VText', 'VButton', 'Group', 'RectShape'];
// 加载组件
const requireComponent = require.context('./components', true, /\.vue$/)
requireComponent.keys()
    .forEach((fileName) => {
        const componentConfig = requireComponent(fileName)
        const componentName = componentConfig['default'].name
        if (componentName) {
            Vue.component(componentName, componentConfig['default'] || componentConfig)
        }
    })
