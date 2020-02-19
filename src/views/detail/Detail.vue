<template>
  <div id="detail">
    <detail-nav-bar
      :currentIndex.sync="currentIndex"
      @clickItem="onNavBarClick"
    ></detail-nav-bar>
    <scroll class="detail-scroll" probe-type="3" @scroll="onScrolling" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goodsInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info :detail-params="paramsInfo" ref="paramsInfo"></detail-param-info>
      <detail-comment-info :detail-comments="commentInfo" ref="commentInfo"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar></detail-bottom-bar>
    <back-top class="back-top" @click.native="toTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import DetailBaseInfo from "./childComponents/DetailBaseInfo";
  import DetailShopInfo from "./childComponents/shopInfo/DetailShopInfo";
  import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
  import DetailCommentInfo from "./childComponents/detailcomments/DetailCommentInfo";
  import DetailParamInfo from "./childComponents/DetailParamInfo";
  import DetailBottomBar from "./childComponents/DetailBottomBar";

  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import { getDetail, getRecommend, Goods, Shop } from "../../network/detail";
  import { backTopMixin } from "../../common/mixin";


  export default {
    name: "Detail",
    components: {
      DetailBottomBar,
      GoodsList,
      DetailParamInfo,
      DetailGoodsInfo,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailCommentInfo,

      BackTop,
      Scroll,
    },

    // 混入
    mixins: [backTopMixin],
    data() {
      return {
        // 数据
        iid: "",
        topImages: [],  // 轮播图
        goodsInfo: {},  // 商品基本信息
        shopInfo: {},  // 商店信息
        detailInfo: {},  // 商品详细信息
        paramsInfo: {},  // 商品参数
        commentInfo: [], // 评论信息
        recommends: [],  // 推荐
        // 状态
        currentIndex: 0,
        // 组件位置
        positions: {},
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      // 请求数据
      this.getDetailInfo(this.iid);
      // 请求推荐数据
      this.getRecommend();

      // 组件位置
      setTimeout(() => {
        this.getPositions();
      }, 1000);
    },
    methods: {
      /**
       * 请求数据
       **/

      getDetailInfo(iid) {
        getDetail(iid)
          .then(re => {
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
      },
      getRecommend() {
        getRecommend().then(re => {
          this.recommends = re.data.list;
        })
      },

      /**
       *  事件处理
       **/

      onScrolling(position) {
        let adjust = 100;
        if ( -position.y > this.positions.recommend - adjust) {
          this.currentIndex = 3;
        } else if (-position.y > this.positions.commentInfo - adjust) {
          this.currentIndex = 2;
        } else if (-position.y > this.positions.paramsInfo - adjust) {
          this.currentIndex = 1;
        } else {
          this.currentIndex = 0;
        }

        this.isShowBackTop = -position.y > 1500;
      },

      onNavBarClick(index) {
        let goTo = this.$refs.scroll.goTo;
        let adjust = 100;
        switch (index) {
          case 0:
            goTo(0, 0);
            break;
          case 1:
            goTo(0, -this.positions.paramsInfo + adjust);
            break;
          case 2:
            goTo(0, -this.positions.commentInfo + adjust);
            break;
          case 3:
            goTo(0, -this.positions.recommend + adjust);
        }
      },
      /**
       *  其他
       */

      getPositions() {
        if (this.$refs.paramsInfo) {
          this.positions.paramsInfo = this.$refs.paramsInfo.$el.offsetTop;
        }

        if (this.$refs.commentInfo) {
          this.positions.commentInfo = this.$refs.commentInfo.$el.offsetTop;
        }

        if (this.$refs.recommend) {
          this.positions.recommend = this.$refs.recommend.$el.offsetTop;
        }
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
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }

  .back-top {
    position: fixed;
    right: 15px;
    bottom: 60px;
  }
</style>
