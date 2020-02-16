<template>
  <div class="detail-swiper">
    <swiper :itemCount="topImages.length" class="detail-swiper">
      <swiper-item v-for="(img, index) of topImages" :key="index"><img :src="img"></swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from "components/common/swiper/index";
  export default {
    name: "DetailSwiper",
    components: {
      SwiperItem,
      Swiper
    },
    props:{
      topImages: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper{
    height: 280px;
    overflow: hidden;
  }
</style>
