<template>
  <div class="cart-list">
   <cart-list-item
     v-for="(product, index) of list"
     :key="index"
     :product="product"></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  import { mapGetters } from 'vuex';
  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters({
        list: 'getCartList'
      })
    }
  }
</script>

<style scoped>

</style>
