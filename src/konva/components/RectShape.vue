<template>
  <div class="rect-shape">
    <v-text :element="element" :propValue="element.propValue" />
  </div>
</template>

<script>
export default {
  name: 'RectShape',
  props: {
    propValue: {
      type: String,
      require: true,
    },
    element: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.rect-shape {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
