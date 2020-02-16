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
    },

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
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .recommend-item img{
    width: 85%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .recommend-item p {
    text-align: center;
  }

</style>
