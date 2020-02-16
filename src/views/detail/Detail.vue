<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>

  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import GoodsInfo from "./childComponents/GoodsInfo";

  import { getDetail, Goods } from "../../network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      GoodsInfo,
    },
    data() {
      return {
        // 数据
        iid: "",
        topImages: [],
        goods: null,
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
            let data = re.result;
            // 商品图片
            this.topImages = data.itemInfo.topImages;
            // 商品信息
            this.goods = new Goods(data.columns, data.itemInfo, data.shopInfo);
            console.log(this.goods);
          });
      }
    }
  }
</script>

<style scoped>

</style>
