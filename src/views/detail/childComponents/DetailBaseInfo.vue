<template>
  <div class="goods-info">
    <!--  价格  -->
    <div class="price">{{ goods.realPrice }}</div>
    <!--  名字  -->
    <p class="title">{{ goods.title }}</p>
    <!--  销量  -->
    <div class="info" >
      <span v-for="(item, index) of goods.columns" :key="index">{{ item }}</span>
    </div>
    <!--  服务  -->
    <div class="service-container">
      <div class="service" v-for="(item, index) of mainService" :key="index">
        <img :src="item.icon">{{ item.name }}
      </div>
      <div class="all-services" v-if="hasMore"><img src="~assets/img/detail/more.svg"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      hasMore() {
        if(this.goods.services) {
          return this.goods.services.length > 3;
        } else {
          return false;
        }

      },
      mainService() {
        if (typeof this.goods.services !== 'undefined') {
          let service = this.goods.services.filter((item) => {
            let keys = Object.keys(item);
            return keys.includes('icon');
          });

          return service.slice(0, 3);
        } else {
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .price {
    box-sizing: border-box;
    height: 54px;

    padding: 0 20px;
    font-size: 2.5em;
    line-height: 54px;
    color: black;

    position: relative;
  }
  .price::before {
    content: '¥';
    display: block;
    font-size: 15px;
    height: 5px;
    width: 5px;

    position: absolute;
    left: 10px;
    top: -10px;
  }

  .title {
    font-size: 15px;
    color: black;
    width: 80%;

    padding: 0 10px;
    margin: 0;
    line-height: 19px;

  }

  .info {
    display: flex;
    justify-content: space-between;
    font-size: 8px;
    color: #666666;
    padding: 10px 10px;
  }
  .service-container {
    padding: 6px 0;
    background: #e6e6e669;
    color: black;


    display: flex;
  }
  .service{
    background: #fff;
    flex: 1;
    text-align: center;
    font-size: 12px;

    line-height: 20px;

    padding: 8px 0;
  }
  .all-services {
    background: #fff;
    flex: 0 1 auto;
    width: 30px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .all-services img{
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }

  .service img {
    width: 15px;
    vertical-align: middle;
    margin: 0 3px;
  }
</style>
