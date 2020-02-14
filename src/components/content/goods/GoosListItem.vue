<template>
  <div class="good-item">
    <img :src="goodsItem.show.img">
    <div>
      <p>{{ goodsItem.title }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoosListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>
