<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <goods-info :goods="goods"></goods-info>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import GoodsInfo from "./childComponents/GoodsInfo";

  import { getDetail, Goods, Shop } from "../../network/detail";

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
        goods: {},
        shop: {}
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
            // 店家信息
            this.shop = new Shop(data.shopInfo);
            console.log(this.shop);
          });
      }
    }
  }
</script>

<style scoped>

</style>
