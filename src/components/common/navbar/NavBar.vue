<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="'nav-left">

      </slot>
    </div>
    <div class="center">
      <slot name="nav-center">

      </slot>
    </div>
    <div class="right">
      <slot name="nav-right">

      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    height: 44px;
  }
  .left, .right {
    width: 60px;
    background: #ff8198;
  }
  .center {
    flex: 1;
    text-align: center;
    background: #ff5777;
  }
</style>
