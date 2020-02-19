<template>
  <div id="cart">
    <!--  导航  -->
    <nav-bar class="nav-bar"><template v-slot:center> 购物车({{ length }}) </template></nav-bar>
    <!--  商品列表  -->
    <cart-list></cart-list>
    <!--  汇总  -->
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComponents/cartList/CartList";

  import { mapGetters } from "vuex"
  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList
    },
    computed: {
      ...mapGetters({
        length: 'getCartListLength',
      }),
    }
  }
</script>

<style scoped>
  .nav-bar {
    background: var(--color-tint);
  }
</style>
