<template>
  <div id="home">
    <nav-bar :style="navStyle">
      <template v-slot:nav-center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends.list"></home-recommend-view>
    <feature-view></feature-view>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComponts/HomeSwiper";
  import HomeRecommendView from "./childComponts/HomeRecommendView";
  import FeatureView from "./childComponts/FeatureView";

  import { getHomeMulidata } from "network/home";
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        navStyle: {
          background: "#ff5777",
          color: "white"
        }
      }
    },
    created() {
      getHomeMulidata()
        .then( res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend;
      })
        .catch(err => {
          console.log(err);
        })
    }
  }
</script>

<style scoped>

</style>
