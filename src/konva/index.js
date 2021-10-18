// * @Author: h7ml
// * @Date: 2021-10-18 19:14:00
// * @LastEditors: h7ml
// * @LastEditTime: 2021-10-18 19:14:00
// * @Description: 所有组件都放在了src/konva/components目录下
// * @FilePath: src\konva\index.js
// * @DocumentLink: https://konvajs.org/api/Konva.html
import Vue from 'vue';

const requireComponent = require.context('./components', true, /\.vue$/);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = componentConfig['default'].name;
  if (componentName) {
    Vue.component(componentName, componentConfig['default'] || componentConfig);
  }
});
