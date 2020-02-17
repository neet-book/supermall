<template>
  <div class="detail-goods-info">
    <!--   描述  -->
    <div class="info-desc">
      <p>{{ detailInfo.desc }}</p>
    </div>
    <div v-for="(item, index) of detailInfo.detailImage" :key="index" >
      <h3 class="info-key">{{ item.key }}</h3>
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
  img {
    width: 100%;
  }
</style>
