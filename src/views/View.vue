<template>
  <div id="container" :key="konvaKey" class="container"></div>
</template>

<script>
// eslint-disable-next-line
import Konva from "konva";

export default {
  name: 'konvaview',
  prop: {
    shape: {
      required: true,
      type: Object,
      // eslint-disable-next-line max-len
      default: () => '{"attrs":{"width":2382,"height":1684,"draggable":true},"className":"Stage","children":[{"attrs":{"hitGraphEnabled":false},"className":"Layer","children":[{"attrs":{},"className":"Image"},{"attrs":{"source":"https://konvajs.org/assets/yoda.jpg"},"className":"Image"}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"draggable":true,"x":306,"y":303,"transformsEnabled":"position"},"className":"Group","children":[{"attrs":{"radius":20,"stroke":"#231fff","strokeWidth":4,"fill":"#ffffff"},"className":"Circle"},{"attrs":{"text":"1","fontSize":14,"originX":"center","originY":"center","fill":"#231fff","x":-5,"y":-5},"className":"Text"},{"attrs":{"data":"M.91,0H29.09A.91.91,0,0,1,30,.91v243a.88.88,0,0,1-.26.63L15.65,258.86a.9.9,0,0,1-1.3,0L.26,244.52a.88.88,0,0,1-.26-.63V.91A.91.91,0,0,1,.91,0Z","originX":"center","originY":"bottom","x":10,"y":15,"angle":-30,"fill":"#231fff","scaleX":0.15,"scaleY":0.15,"rotation":-30},"className":"Path"}]},{"attrs":{"draggable":true,"x":490,"y":557,"transformsEnabled":"position"},"className":"Group","children":[{"attrs":{"radius":20,"stroke":"#231fff","strokeWidth":4,"fill":"#ffffff"},"className":"Circle"},{"attrs":{"text":"2","fontSize":14,"originX":"center","originY":"center","fill":"#231fff","x":-5,"y":-5},"className":"Text"},{"attrs":{"data":"M.91,0H29.09A.91.91,0,0,1,30,.91v243a.88.88,0,0,1-.26.63L15.65,258.86a.9.9,0,0,1-1.3,0L.26,244.52a.88.88,0,0,1-.26-.63V.91A.91.91,0,0,1,.91,0Z","originX":"center","originY":"bottom","x":10,"y":15,"angle":-30,"fill":"#231fff","scaleX":0.15,"scaleY":0.15,"rotation":-30},"className":"Path"}]}]}]}',
    },
    konvaKey: {
      required: false,
      type: String,
      default: '3',
    },
  },
  data() {
    return {
      stage: {},
      konvaKey: '111',
      defaultJson:
        // eslint-disable-next-line max-len
        '{"attrs":{"width":2382,"height":1200,"draggable":true},"className":"Stage","children":[{"attrs":{"hitGraphEnabled":false},"className":"Layer","children":[{"attrs":{},"className":"Image"},{"attrs":{"source":"https://konvajs.org/assets/yoda.jpg"},"className":"Image"}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"draggable":true,"x":306,"y":303,"transformsEnabled":"position"},"className":"Group","children":[{"attrs":{"radius":20,"stroke":"#231fff","strokeWidth":4,"fill":"#ffffff"},"className":"Circle"},{"attrs":{"text":"1","fontSize":14,"originX":"center","originY":"center","fill":"#231fff","x":-5,"y":-5},"className":"Text"},{"attrs":{"data":"M.91,0H29.09A.91.91,0,0,1,30,.91v243a.88.88,0,0,1-.26.63L15.65,258.86a.9.9,0,0,1-1.3,0L.26,244.52a.88.88,0,0,1-.26-.63V.91A.91.91,0,0,1,.91,0Z","originX":"center","originY":"bottom","x":10,"y":15,"angle":-30,"fill":"#231fff","scaleX":0.15,"scaleY":0.15,"rotation":-30},"className":"Path"}]},{"attrs":{"draggable":true,"x":490,"y":557,"transformsEnabled":"position"},"className":"Group","children":[{"attrs":{"radius":20,"stroke":"#231fff","strokeWidth":4,"fill":"#ffffff"},"className":"Circle"},{"attrs":{"text":"2","fontSize":14,"originX":"center","originY":"center","fill":"#231fff","x":-5,"y":-5},"className":"Text"},{"attrs":{"data":"M.91,0H29.09A.91.91,0,0,1,30,.91v243a.88.88,0,0,1-.26.63L15.65,258.86a.9.9,0,0,1-1.3,0L.26,244.52a.88.88,0,0,1-.26-.63V.91A.91.91,0,0,1,.91,0Z","originX":"center","originY":"bottom","x":10,"y":15,"angle":-30,"fill":"#231fff","scaleX":0.15,"scaleY":0.15,"rotation":-30},"className":"Path"}]}]}]}',
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.createTopo();
    });
  },
  methods: {
    createTopo() {
      // // eslint-disable-next-line max-len
      // const json = '{"attrs":{"width":578,"height":200},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":100,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]}'
      // // create node using json string
      // const stage1 = Konva.Node.create(json, 'container')
      // this.konvaKey = Math.round(new Date() / 1000) + ''

      const width = window.innerWidth;
      const height = window.innerHeight;

      const stage = new Konva.Stage({
        container: 'container',
        width,
        height,
      });

      const layer = new Konva.Layer();

      const rect1 = new Konva.Rect({
        x: 20,
        y: 20,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
      });
      // add the shape to the layer
      layer.add(rect1);

      const rect2 = new Konva.Rect({
        x: 150,
        y: 40,
        width: 100,
        height: 50,
        fill: 'red',
        shadowBlur: 10,
        cornerRadius: 10,
      });
      layer.add(rect2);

      const rect3 = new Konva.Rect({
        x: 50,
        y: 120,
        width: 100,
        height: 100,
        fill: 'blue',
        cornerRadius: [0, 10, 20, 30],
      });
      layer.add(rect3);

      // add the layer to the stage
      stage.add(layer);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1400px;
  height: 846px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  background-color: #f0f0f0;
}
</style>
