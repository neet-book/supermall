<template>
  <div class="detail-bottom-bar">
    <div class="left">
      <div class="service-btn">
        <div class="img-box">
          <img src="~assets/img/detail/detail_bottom.png">
        </div>
        <p>客服</p>
      </div>
      <div class="shop-btn">
        <div class="img-box">
          <img src="~assets/img/detail/detail_bottom.png">
        </div>
        <p>商铺</p>
      </div>
      <div class="coll-btn">
        <div class="img-box">
          <img src="~assets/img/detail/detail_bottom.png">
        </div>
        <p>收藏</p>
      </div>
    </div>
    <div class="right">
    <button class="shopping-car" @click.prevent="addToCart">加入购物车</button>
    <button class="buy" @click="buyGoods">购买</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart(event) {
        this.$emit('add-to-cart', event )
      },
      buyGoods() {

      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar {
    display: flex;
    height: 49px;
    overflow: hidden;
    background: var(--color-background);

    box-shadow: 0 1px 1px 2px #adadad;
  }
  .left, .right {
    flex: 1;

    display: flex;
    justify-content: space-evenly;
  }
  .left img {
    width: 100%;
    position: relative;
  }
  .left p {
    padding: 0;
    margin: 0;
    font-size: 14px;
    text-align: center;
  }

  .img-box {
    width: 25px;
    height: 25px;
    margin: 3px auto;
    overflow: hidden;

    position: relative;
  }

  .shop-btn img{
    top: -60px;
  }

  .coll-btn img{
    top: -110px;
  }

  .right button{
    flex: 1;
    height: 100%;
    margin: 0;
    border: none;

    font-size: 14px;
  }

  .shopping-car {
    background: gold;
  }
  .buy {
    background: hotpink;
  }
</style>
