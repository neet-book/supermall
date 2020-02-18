<template>
  <div class="detail-goods-info">
    <!--   描述  -->
    <div class="info-desc">
      <div class="start"></div>
      <p>{{ detailInfo.desc }}</p>
      <div class="end"></div>
    </div>

    <!--   详情   -->
    <div v-for="(item, index) of detailInfo.detailImage" :key="index" class="info">
      <!--   关键字   -->
      <h3 class="info-key">{{ item.key }}</h3>
      <!--   图片   -->
      <div class="info-list">
        <img v-for="(img, index) of item.list" :key="index" :src="img">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-goods-info {
    border-top: 5px #e6e6e669 solid;
  }
  .info-desc {
    padding: 15px 10px;
    position: relative;
  }
  .start {
    border-top: 1px solid;
    width: 25%;
    position: relative;
  }
  .start::before {
    content: "";
    display: block;
    width: 3px;
    height: 3px;
    background: black;

    position: absolute;
    top: -3px;
  }
  .end {
    border-top: 1px solid;
    width: 25%;
    position: relative;
    left: 100%;
    transform: translateX(-100%);
  }

  .end::after {
    content: "";
    display: block;
    width: 3px;
    height: 3px;
    background: black;

    position: absolute;
    top: -3px;
    right: 0;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .info-key {
    width: 100%;
    text-align: center;
  }
  .info-list {
    width: 96%;
    max-width: 709px;
    margin: 0 auto;
  }
  .info-list img {
    width: 100%;
  }
</style>
