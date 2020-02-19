<template>
  <div class="detail-nav">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backLastPage">
          <img src="~assets/img/common/back.svg">
        </div>
      </template>
      <template v-slot:center>
       <div class="title">
         <p
           v-for="(title, index) of titles"
           :key="title"
           class="title"
           :class="{ active: currentIndex === index }"
           @click="clickItem(index)"
         > {{ title }}</p>
       </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    props: {
      titles: {
        type: Array,
        default() {
          return ['商品', '参数', '评论', '推荐'];
        }
      },
      currentIndex : {
        type: Number,
        default: 0
      }
    },
    methods: {
      // 事件
      clickItem(index) {
        this.$emit('update:currentIndex', index);
        this.$emit('clickItem', index);
      },

      backLastPage() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .title p {
    flex: 1;
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 13px;
  }

  .back {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .back img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .active {
    color: var(--color-height-text);
  }
</style>
