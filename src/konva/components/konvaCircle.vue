<!--
* @Author: h7ml
* @Date: 2021-10-18 19:16:05
* @LastEditors: h7ml
* @LastEditTime: 2021-10-18 19:16:05
* @Description:
* @FilePath: src\konva\components\Circle.vue
* @DocumentLink: https://konvajs.org/docs/shapes/Circle.html
-->
<template>
  <div class="Rect-container">
    <div class="Rect-content">
      {{ infoData }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'konvaCircle',
  components: {},
  data() {
    return {
      infoData: 'Circle',
    };
  },
  computed: {},
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {},
  methods: {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
.Rect-container {
  width: 100%;
  height: 100%;

  &-container {
    width: 100%;
    height: 100%;
  }
}
</style>
