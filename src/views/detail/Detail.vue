<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="detail-scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goodsInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info :detail-params="paramsInfo"></detail-param-info>
      <detail-comment-info :detail-comments="commentInfo"></detail-comment-info>
    </scroll>


  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import DetailBaseInfo from "./childComponents/DetailBaseInfo";
  import DetailShopInfo from "./childComponents/shopInfo/DetailShopInfo";
  import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
  import DetailCommentInfo from "./childComponents/detailcomments/DetailCommentInfo";

  import Scroll from "components/common/scroll/Scroll";

  import { getDetail, Goods, Shop } from "../../network/detail";
  import DetailParamInfo from "./childComponents/DetailParamInfo";

  export default {
    name: "Detail",
    components: {
      DetailParamInfo,
      DetailGoodsInfo,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailCommentInfo,

      Scroll
    },
    data() {
      return {
        // 数据
        iid: "",
        topImages: [],  // 轮播图
        goodsInfo: {},  // 商品基本信息
        shopInfo: {},  // 商店信息
        detailInfo: {},  // 商品详细信息
        paramsInfo: {},  // 商品参数
        commentInfo: [],
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
            this.goodsInfo = new Goods(data.columns, data.itemInfo, data.shopInfo);
            // 店家信息
            this.shopInfo = new Shop(data.shopInfo);
            // 商品详细信息
            this.detailInfo = data.detailInfo;
            // 商品参数
            this.paramsInfo = data.itemParams;
            // 评论
            this.commentInfo = data.rate.list;

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
