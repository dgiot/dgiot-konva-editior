<!--
* @Author: h7ml
* @Date: 2021-10-18 19:16:05
* @LastEditors: h7ml
* @LastEditTime: 2021-10-18 19:16:05
* @Description:
* @FilePath: src\konva\components\Text.vue
* @DocumentLink: https://konvajs.org/docs/shapes/Text.html
-->
<template>
  <div class="text-container">
    <div id="text-content" class="text-content">
      {{ infoData }}
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import Konva from "Konva";

export default {
  name: 'KonvaText',
  components: {},
  data() {
    return {
      infoData: 'Text',
    };
  },
  computed: {},
  mounted() {
    this.createdText();
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {},
  methods: {
    createdText() {
      const stage = new Konva.Stage({
        container: 'text-content',
        width: 340,
        height: 300,
      });

      const layer = new Konva.Layer();

      // since this text is inside of a defined area, we can center it using
      // align: 'center'
      const complexText = new Konva.Text({
        x: 20,
        y: 60,
        text: "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players.",
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#555',
        width: 300,
        padding: 20,
        align: 'center',
      });
      layer.add(complexText);

      // add the layer to the stage
      stage.add(layer);
    },
  }, // 如果页面有keep-alive缓存功能，这个函数会触发
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
