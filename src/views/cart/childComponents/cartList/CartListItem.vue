<template>
  <div class="cart-list-item">
    <check-button @click.native="changeChecked" :isChecked="product.checked"></check-button>
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
  import { CHANGE_CHECKED } from "@/store/mutaition.type";
  import CheckButton from "components/content/checkButton/CheckButton";

  export default {
    name: "CartListItem",
    components: {CheckButton},
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
      changeChecked() {
        this.$store.commit(CHANGE_CHECKED, this.product.iid);
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

</style>
