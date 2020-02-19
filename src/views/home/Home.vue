<template>
  <div id="home">
    <!-- 导航 -->
    <nav-bar id="nav-bar">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <!-- 吸顶时显示 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      ref="tabControl2"
      @tab-click="changeList"
      :class="{ 'fixed': isTabFixed }"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      v-bind="{ probeType: 3, pullUpLoad: true }"
      @scroll="scrolling"
      @pullingUp="pullUpdate"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @imageLoaded.once="swiperImageLoaded"></home-swiper>
      <!-- 推荐 -->
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <!-- 主题切换 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        ref="tabControl1"
        @tab-click="changeList"

      ></tab-control>
      <!-- 商品列表 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top class="back-top" @click.native="toTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";

  import HomeSwiper from "./childComponts/HomeSwiper";
  import HomeRecommendView from "./childComponts/HomeRecommendView";
  import FeatureView from "./childComponts/FeatureView";
  import BackTop from "components/content/backTop/BackTop";

  import { getHomeMultidata, getHomeGoods } from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      GoodsList,
      Scroll,

      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      BackTop
    },
    data() {
      return {
        // 数据
        banners: [],
        recommends: [],
        titles: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          shell: {page: 0, list: []}
        },
        tabControlOffset: 0,
        positionY: 0,
        // 状态
        currentType: 'pop',
        isTabFixed: false,
      }
    },

    // 展示商品类型
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      },
    },
    // activated() {
    //   this.backTo(this.positionY);
    // },
    created() {
      // 在组件创建后进行第一次数据请求
     this.getHomeMultidata();

     // 请求Goods数据
     this.getHomeGoods('pop');
     this.getHomeGoods('new');
     // this.getHomeGoods('shell');
    },
    methods: {
      /**
       *  事件监听
       */
      // control bar 点击
      changeList(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'shell';
            break;
        }

        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },

      // 滚动
      scrolling(event) {
        this.isShowBackTop = -event.y > 1500;
        this.isTabFixed = -event.y > this.tabControlOffset;
        if(event.y) this.positionY = event.y;
      },

      // swiper图片加载
      swiperImageLoaded() {
        this.tabControlOffset = this.$refs.tabControl1.$el.offsetTop
      },
      /**
       *  网络请求
       */
      // banner, recommend数据
      getHomeMultidata() {
        return getHomeMultidata().then(re => {
          this.banners = re.data.banner.list;
          this.recommends = re.data.recommend.list;
        });
      },

      // 请求Goods下一页数据
      getHomeGoods(type) {
        let page = this.goods[type].page;
        return getHomeGoods(type, page + 1)
          .then(re => {
            let list = re.data.list;
            this.goods[type].list.push(...list);

            this.goods[type].page++;
          });
      },

      // 下拉更新
      pullUpdate(scroll) {
        this.getHomeGoods(this.currentType)
          .then(() => {
            // 告诉scroll数据加载已经结束,设置延时，防止用户重复下拉
            setTimeout(() => scroll.finishPullUp(), 500);
            scroll.refresh();
          })
        .catch(e => {
          console.log(e);
          setTimeout(() => scroll.finishPullUp(), 500);
        })
      },
      /**
       *  行为
       */
      // 回到顶部
      toTop() {
        this.$refs.scroll.goTo(0, 0);
        this.isShowBackTop = false;
      },

      // 回到离开时的位置
      backTo(y) {
        if (this.$refs.scroll.scroll) {
          this.$refs.scroll.goTo(0, y, 0);
          this.$refs.scroll.scroll.refresh();
        }
      }
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }
  #nav-bar {
    background: #ff5777;
    color: white;

    /*position: fixed;*/
    /*top: 0;*/
    /*right: 0;*/
    /*left: 0;*/
    /*z-index: 9;*/
  }
  .tab-control {
    /*position: sticky;*/
    top: 44px;
    background: var(--color-background);
    z-index: 9;
  }
  .content {
    position: fixed;
    top: 44px;
    bottom: 48px;
    left: 0;
    right: 0;

    height: calc( 100% - 93px);
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .back-top {
    position: fixed;
    right: 15px;
    bottom: 60px;
  }

  .fixed {
    position: fixed;
    top: 43px;
    left: 0;
    right: 0;

    box-shadow: 0 2px 1px -2px #666666ad;
  }
</style>
