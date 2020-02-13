<template>
  <div id="hy-swiper">
    <div  class='swiper' @touchstart="touchStart" @touchmove="touchMove" @touchEnd="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator" >
      <slot name="indicator" v-if="slidCount > 1 && showIndicator">
        <div class="indi-item" :class="{ active: index == cutrentSwip }" v-for="(item, index) of slidCount" :key="index">
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props: {
      // 滚动间隔(毫秒)
      interval: {
        type: Number,
        default: 3000
      },
      // 滚动播放延迟
      animDuration: {
        type: Number,
        default: 300,
      },
      // 手动切换轮播图移动比例
      moveRatio: {
        type: Number,
        default: 0.85
      },
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      touchStart(event) {
        console.log(event.touches);
      }
    }
  }
</script>

<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }
  .swiper {
    display: flex;
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100px;
    bottom: 8px
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    background: #00BFFFF1;
  }
  .active {
    background: #00BFFF;
  }
</style>
