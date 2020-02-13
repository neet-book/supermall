<template>
  <div id="home">
    <nav-bar>
      <template v-slot:nav-left></template>
      <template v-slot:nav-conter></template>
      <template v-slot:nav-right></template>
    </nav-bar>
    <swiper></swiper>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import { getHomeMulidata } from "network/home";
  import Swiper from "components/common/swiper/Swiper"

  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMulidata().then( res => {
        console.log(res);
        this.result = res;
      })
    }
  }
</script>

<style scoped>

</style>
