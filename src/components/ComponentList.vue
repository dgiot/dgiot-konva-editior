<template>
  <div class="component-list" @dragstart="handleDragStart">
    <div v-for="(item, index) in componentList" :key="index" :data-index="index" class="list" draggable>
      <span :class="'icon-' + item.icon" class="iconfont"></span>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
import componentList from "@/konva/components/component-list";

export default {
  data() {
    return {
      componentList,
    };
  },
  methods: {
    handleDragStart(e) {
      e.dataTransfer.setData("index", e.target.dataset.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.component-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;

  .list {
    width: 45%;
    border: 1px solid #dddddd;
    cursor: grab;
    margin-bottom: 10px;
    text-align: center;
    color: #333333;
    padding: 2px 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
      cursor: grabbing;
    }

    .iconfont {
      margin-right: 4px;
      font-size: 20px;
    }

    .icon-wenben,
    .icon-tupian {
      font-size: 18px;
    }
  }
}
</style>
