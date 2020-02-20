<template>
  <div id="cart">
    <!--  导航  -->
    <nav-bar class="nav-bar"><template v-slot:center> 购物车({{ length }}) </template></nav-bar>
    <!--  商品列表  -->
    <scroll class="content">
      <cart-list></cart-list>
    </scroll>
    <!--  汇总  -->
    <CartBottomBar class="bottom-bar"></CartBottomBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll"
  import CartList from "./childComponents/cartList/CartList";
  import CartBottomBar from "./childComponents/CartBottomBar";

  import { mapGetters } from "vuex"
  export default {
    name: "Cart",
    components: {
      Scroll,
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters({
        length: 'getCartListLength',
      }),
    }
  }
</script>

<style scoped>
  #cart {
    height: 100vh;
  }
  .nav-bar {
    background: var(--color-tint);
  }
  .content {
    height: calc(100% - 82px - 49px);
    overflow: hidden;
  }

  .bottom-bar, .ignore{
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
