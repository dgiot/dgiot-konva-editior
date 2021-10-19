<!--
* @Author: h7ml
* @Date: 2021-10-18 19:16:05
* @LastEditors: h7ml
* @LastEditTime: 2021-10-18 19:16:05
* @Description:
* @FilePath: src\konva\components\Label.vue
* @DocumentLink: https://konvajs.org/docs/shapes/Label.html
-->
<template>
  <div class="Label-container">
    <div id="Label-content" class="Label-content">
      {{ infoData }}
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import Konva from "Konva";

export default {
  name: 'konvaLabel',
  components: {},
  data() {
    return {
      infoData: 'Label',
    };
  },
  computed: {},
  mounted() {
    this.createdLable();
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {},
  methods: {
    createdLable() {
      const stage = new Konva.Stage({
        container: 'Label-content',
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const layer = new Konva.Layer();

      // tooltip
      const tooltip = new Konva.Label({
        x: 170,
        y: 75,
        opacity: 0.75,
      });

      tooltip.add(
        new Konva.Tag({
          fill: 'black',
          pointerDirection: 'down',
          pointerWidth: 10,
          pointerHeight: 10,
          lineJoin: 'round',
          shadowColor: 'black',
          shadowBlur: 10,
          shadowOffsetX: 10,
          shadowOffsetY: 10,
          shadowOpacity: 0.5,
        })
      );

      tooltip.add(
        new Konva.Text({
          text: 'Tooltip pointing down',
          fontFamily: 'Calibri',
          fontSize: 18,
          padding: 5,
          fill: 'white',
        })
      );

      // label with left pointer
      var labelLeft = new Konva.Label({
        x: 20,
        y: 130,
        opacity: 0.75,
      });

      labelLeft.add(
        new Konva.Tag({
          fill: 'green',
          pointerDirection: 'left',
          pointerWidth: 20,
          pointerHeight: 28,
          lineJoin: 'round',
        })
      );

      labelLeft.add(
        new Konva.Text({
          text: 'Label pointing left',
          fontFamily: 'Calibri',
          fontSize: 18,
          padding: 5,
          fill: 'white',
        })
      );

      // simple label
      var simpleLabel = new Konva.Label({
        x: 180,
        y: 150,
        opacity: 0.75,
      });

      simpleLabel.add(
        new Konva.Tag({
          fill: 'yellow',
        })
      );

      simpleLabel.add(
        new Konva.Text({
          text: 'Simple label',
          fontFamily: 'Calibri',
          fontSize: 18,
          padding: 5,
          fill: 'black',
        })
      );

      // add the labels to layer
      layer.add(tooltip);
      // .add(labelLeft)
      // .add(simpleLabel)

      // add the layer to the stage
      stage.add(layer);
      // console.log(stage.toJSON())
    },
  }, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
.Label-container {
  width: 100%;
  height: 100%;

  &-container {
    width: 100%;
    height: 100%;
  }
}
</style>
