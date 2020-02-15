<template>
  <div class="goods">
    <goos-list-item v-for="(item, index) of goods" :goods-item="item" :key="index"></goos-list-item>
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
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
