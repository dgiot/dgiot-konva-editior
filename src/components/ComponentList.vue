<template>
  <el-tabs style="height: 200px" tab-position="left">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-picture"></i></span>
      <div class="component-list" @dragstart="handleDragStart">
        <div v-for="(item, index) in componentList" :key="index" :data-index="index" class="list" draggable>
          <span :class="'icon-' + item.icon" class="iconfont" :title="item.label"></span>
          <!--                    <span>{{ item.label }}</span>-->
        </div>
      </div>
    </el-tab-pane>
    <!--        <el-tab-pane><span slot="label"><i class="el-icon-date"></i></span>-->
    <!--        </el-tab-pane>-->
    <!--        <el-tab-pane><span slot="label"><i class="el-icon-date"></i></span>-->
    <!--        </el-tab-pane>-->
    <!--        <el-tab-pane><span slot="label"><i class="el-icon-date"></i></span>-->
    <!--        </el-tab-pane>-->
  </el-tabs>
</template>

<script>
import componentList from '@/konva/components/component-list';

export default {
  data() {
    return {
      componentList,
    };
  },
  methods: {
    handleDragStart(e) {
      e.dataTransfer.setData('index', e.target.dataset.index);
    },
  },
};
</script>
<style>
.el-tabs__nav-scroll {
  padding: 0 !important;
}

.el-tabs--left {
  height: 100vh !important;
}
</style>

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
