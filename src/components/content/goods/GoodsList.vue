<template>
  <div class="goods">
    <goos-list-item v-for="item of goods" :goods-item="item" :key="item.iid"></goos-list-item>
  </div>
</template>

<script>
  import GoosListItem from "./GoosListItem";
  export default {
    name: "GoodsList",
    components: {
      GoosListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
