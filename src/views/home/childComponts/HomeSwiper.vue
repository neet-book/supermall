<template>
  <swiper>
    <swiper-item v-for="(banner, index) of banners" :key="index">
      <a :href="banner.link">
        <img :src="banner.image" :alt="banner.title">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from "components/common/swiper/index";
  export default {
    name: "HomeSwiper",
    // props: ["banners"],
    props: {
      banners: {
        validator(value) {
          if (value instanceof Array) {
            return value.every(item => {
              return typeof item.image !== "undefined" &&
                item.title !== "undefined" &&
                item.link !== "undefined";
            });
          } else {
            return false;
          }
        },
        default() {
          return [];
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
  }
</script>

<style scoped>

</style>
