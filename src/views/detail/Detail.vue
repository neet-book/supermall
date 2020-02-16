<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";

  import { getDetail } from "../../network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data() {
      return {
        // 数据
        iid: "",
        topImages: [],

      }
    },
    created() {
      this.iid = this.$route.params.iid;
      this.getDetail(this.iid);
    },
    methods: {
      getDetail(iid) {
        getDetail(iid)
          .then(re => {
            console.log(re);
            this.topImages = re.result.itemInfo.topImages;
          });
      }
    }
  }
</script>

<style scoped>

</style>
