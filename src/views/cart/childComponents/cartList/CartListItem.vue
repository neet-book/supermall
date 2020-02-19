<template>
  <div class="cart-list-item">
    <div class="choose" :class="{'is-choose': isChoose}" @click="onChoose"></div>
    <div class="product-img">
      <img :src="product.image" alt="product">
    </div>
    <div class="product-info">
      <h3> {{ product.title }}</h3>
      <p> {{ product.desc }}</p>
      <div class="price-container">
        <span> ¥{{ product.price }}</span>
        <span> x{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartListItem",
    data() {
      return {
        isChoose: true
      }
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      onChoose() {
        this.isChoose = !this.isChoose;
        this.$emit('product-choose', {
          iid: this.product.iid,
          isChoose: this.isChoose
        })
      }
    }
  }
</script>

<style scoped>
  .cart-list-item {
    height: 130px;
    border-bottom: #666666 1px solid;
    padding: 10px 10px 10px 0px;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .product-img {
    width: 75px;
    border-radius: 10px;
    overflow: hidden;

    margin-right: 10px;
  }
  .product-img img {
    width: 100%;
  }

  .product-info {
    flex: 1;

    height: 100%;
    overflow: hidden;
  }
  .product-info h3, p {
    margin: 0px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .product-info h3 {
    padding: 10px 0 10px 0;
  }

  .price-container {
    display: flex;
    justify-content: space-between;

    position: relative;
    bottom: -35px;

    font-size: 20px;
  }

  .price-container span:first-child {
    color: darkorange;
  }
  .choose {
    width: 18px;
    height: 18px;
    margin: 5px;
    border-radius: 50%;

    background-color: rgba(255, 91, 135, 0.75);
  }
  .is-choose {
    background-image: url("~assets/img/cart/tick.svg");
    background-size: 12px 12px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #ff6580;
  }
</style>
