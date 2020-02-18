<template>
  <div class="shop-info">
    <div class="shop-name">
      <slot name="shopName">
        <div class="logo">
          <img :src="shop.logo" alt="logo">
        </div>
        <h3>{{ shop.name }}</h3>
      </slot>
    </div>
    <div class="shop-score">
      <score :scores="shop.score" :goods-counts="shop.goodsCounts" :sells="shop.sells"></score>
    </div>
  </div>
</template>

<script>
  import Score from "./DetailScore";
  export default {
    name: "ShopInfo",
    components: {
      Score
    },
    props: {
      shop: {
        type: Object,
        default() {
          return {};
        }
      }
    },
  }
</script>

<style scoped>
  .shop-name {
    display: flex;
    height: 90px;
    padding:0 10px;
    align-items: center;
  }

  .shop-name h3 {
    padding-left: 10px;

    margin: 0;
  }
  .logo {
    width: 50px;
    height: 50px;
    border: 1px solid rgba(209, 209, 209, 0.57);
    border-radius: 50%;
    overflow: hidden;
  }
  .logo img {
    width: 100%;
  }
</style>
