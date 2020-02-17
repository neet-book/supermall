<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="detail-scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
    </scroll>


  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import DetailBaseInfo from "./childComponents/DetailBaseInfo";
  import DetailShopInfo from "./childComponents/shopInfo/DetailShopInfo";
  import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";

  import Scroll from "components/common/scroll/Scroll";

  import { getDetail, Goods, Shop } from "../../network/detail";

  export default {
    name: "Detail",
    components: {
      DetailGoodsInfo,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,

      Scroll
    },
    data() {
      return {
        // 数据
        iid: "",
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
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
            // 商品详细信息
            this.detailInfo = data.detailInfo;
            console.log(this.detailInfo)
          });
      }
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    background: var(--color-background);

    position: relative;
    z-index: 9;
  }

  .detail-scroll {
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>
