<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      @click="active(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: ['titles'],
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      active(index) {
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 15px;

  }

  .tab-control-item {
    flex: 1;
    position: relative;
  }

  .active {
    color: var(--color-height-text);
  }
  .active::after{
    content: "";
    display: block;
    width: 35px;
    height: 2px;
    background: var(--color-height-text);

    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);
  }
</style>
