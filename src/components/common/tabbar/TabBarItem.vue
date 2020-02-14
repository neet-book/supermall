<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon">
        <img src="~assets/img/tabbar/home.svg" alt="">
      </slot>
    </div>
    <div v-else>
      <slot name="item-icon-active">
        <img src="~assets/img/tabbar/home_active.svg" alt="">
      </slot>
    </div>
      <div :style="activeStyle">
        <slot name="item-text">
        首页
        </slot>
      </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "#ff5676"
      },
      deactivatedColor: {
        type: String,
        default: "black"
      }
    },
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        return this.$route.path.includes(this.path);
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {color: this.deactivatedColor};
      }
    },
    methods: {
      itemClick() {
        if (this.$route.path === this.path) return
        this.$router.push(this.path);
      }
    }
  }

</script>

<style scoped>
  .tab-bar-item{
    text-align: center;
    flex: 1;
    height: 49px;
    background: #f6f6f6;
    font-size: 12px;
  }
  .tab-bar-item img {
    margin: 3px 0 3px 0;
    width: 20px;

    vertical-align: middle;
  }
</style>
