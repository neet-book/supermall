<template>
  <div id="home">
    <nav-bar id="nav-bar">
      <template v-slot:nav-center>购物街</template>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      v-bind="{ probeType: 3, pullUpLoad: true }"
      @scroll="scrolling"
      @pulling-up="pullUpdate"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends.list"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tab-click="changeList"
      ></tab-control>
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

        // 状态
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      },
    },
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
      changeList(event) {
        switch (event) {
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
      },
      scrolling(event) {
        this.isShowBackTop = -event.y > 1500;
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
            setTimeout(() => scroll.finishPullUp(), 1000);
            scroll.refresh();
          })
        .catch(e => {
          console.log(e);
          setTimeout(() => scroll.finishPullUp(), 1000);
        })
      },
      /**
       *  行为
       */
      // 回到顶部
      toTop() {
        this.$refs.scroll.goTo(0, 0);
        this.isShowBackTop = false;
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

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
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
</style>
