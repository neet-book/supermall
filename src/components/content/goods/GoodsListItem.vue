<template>
  <div class="good-item" @click="goTo()">
    <img :src="showImg">
    <div class="item-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price"> {{ goodsItem.price}} ¥</span>
      <span class="colle"> {{ goodsItem.cfav }}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: "GoosListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImg() {
        if (this.goodsItem.show) {
          return this.goodsItem.show.img;
        } else if ( this.goodsItem) {
          return this.goodsItem.image;
        } else {
          return '~asset/img/comment/placeholder.png'
        }
      }
    },
    methods: {
      goTo() {
        this.$router.push('/detail/' + this.goodsItem.iid);
      }
    }
  }
</script>

<style scoped>
  .good-item {
    width: 48%;
    font-size: 13px;
  }

  .good-item img{
    border-radius: 3px;
    width: 100%;
  }

  .item-info {
    text-align: center;
    padding: 5px 0;
  }

  .item-info p {
    width: 100%;
    margin: 0;
    padding: 3px 0;

    overflow: hidden;
    text-overflow: ellipsis;

  }

  .price {
    padding-right: 20px;
    color: var(--color-height-text);
  }
  .colle {
    position: relative;
  }
  .colle::before {
    content: "";
    position: absolute;
    top: 0;
    left: -15px;
    width: 15px;
    height: 15px;

    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
