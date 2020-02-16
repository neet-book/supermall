<template>
  <div class="goods-info">
    <div class="price">{{ goods.realPrice }}</div>
    <p class="title">{{ goods.title }}</p>
    <div class="info" >
      <span v-for="(item, index) of goods.columns" :key="index">{{ item }}</span>
    </div>
    <div class="service-container">
      <div class="service" v-for="item of goods.services" :key="item.name">
        <img :src="item.icon">{{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  }
</script>

<style scoped>
  .price {
    box-sizing: border-box;
    height: 54px;

    padding: 0 20px;
    font-size: 2.5em;
    line-height: 54px;
    color: black;

    position: relative;
  }
  .price::before {
    content: '¥';
    display: block;
    font-size: 15px;
    height: 5px;
    width: 5px;

    position: absolute;
    left: 10px;
    top: -10px;
  }

  .title {
    font-size: 15px;
    color: black;
    width: 80%;

    padding: 0 10px;
    margin: 0;
    line-height: 19px;

  }

  .info {
    display: flex;
    justify-content: space-between;
    font-size: 8px;
    color: #666666;
    padding: 10px 10px;
  }
  .service-container {
    padding: 10px 0;
    background: #e6e6e6;
    color: black;


    display: flex;
  }
  .service {
    background: #fff;
    flex: 1;
    text-align: center;
    font-size: 12px;

    line-height: 20px;

    padding: 8px 0;
  }
  .service img {
    width: 15px;
    vertical-align: middle;
    margin: 0 3px;
  }
</style>
