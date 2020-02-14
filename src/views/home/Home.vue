<template>
  <div id="home">
    <nav-bar id="nav-bar">
      <template v-slot:nav-center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends.list"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>
    <goods-list :goods="goods.pop.list"></goods-list>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import HomeSwiper from "./childComponts/HomeSwiper";
  import HomeRecommendView from "./childComponts/HomeRecommendView";
  import FeatureView from "./childComponts/FeatureView";

  import { getHomeMultidata, getHomeGoods } from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      GoodsList,

      HomeSwiper,
      HomeRecommendView,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          shell: {page: 0, list: []}
        }
      }
    },
    created() {
      // 在组件创建后进行第一次数据请求
     this.getHomeMultidata();

     // 请求Goods数据
     this.getHomeGoods('pop');
     this.getHomeGoods('new');
     this.getHomeGoods('shell');
    },
    methods: {
      // 请求banner, recommend的数据
      getHomeMultidata() {
        getHomeMultidata().then(re => {
          this.banners = re.data.banner.list;
          this.recommends = re.data.recommend.list;
        });
      },

      // 请求Goods下一页数据
      getHomeGoods(type) {
        let page = this.goods[type].page;
        getHomeGoods(type, page + 1)
          .then(re => {
            let list = re.data.list;
            this.goods[type].list.push(...list);

            this.goods[type].page++;
          });
      }
    }
  }
</script>

<style scoped>
  #home {
    padding: 44px 0;
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
    position: sticky;
    top: 44px;
    background: var(--color-background);
  }
</style>
