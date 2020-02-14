<template>
  <div class="recommends">
    <div v-for="item of recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{ item.title }}</p>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommends {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 0 10px 0;
    font-size: 12px;
  }
  .recommend-item a {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .recommend-item img, p {
    width: 80%;
    text-align: center;
    text-align: center;
  }
  .recommend-item p {

  }
</style>
