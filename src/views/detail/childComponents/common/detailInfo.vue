<template>
  <div class="detail-info">
    <div class="title">
      <slot name="head"></slot>
    <div>
    <div class="body">
      <slot></slot>
    </div>
      <div name="foot">
        <slot></slot>
      </div>
  </div>

</template>

<script>
  export default {
    name: "detailInfo"
  }
</script>

<style scoped>

</style>
