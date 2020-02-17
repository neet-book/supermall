<template>
  <div class="shoop-score">
    <div class="score">
      <div class="goods-sells">
        <div><p>{{ shopSells }}</p><p>总销量</p></div>
        <div><p>{{ shopGoodsCount }}</p><p>全部宝贝</p></div>
      </div>
      <div class="points">
        <table>
          <tr v-for="( item, index ) of scores" :key="index" class="point">
            <td>{{ item.name }}</td>
            <td class="grade" :class="{ better: item.isBetter }">{{ item.score }}</td>
            <td><span class="rank" :class="{ good: item.isBetter }">{{ item.isBetter ? "高" : "低"}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="btn"><button>进去逛逛</button></div>
  </div>
</template>

<script>
  export default {
    name: "Score",
    props: {
      scores: {
        type: Array,
        default() {
          return []
        }
      },
      goodsCounts: {
        type: Number,
        default: 0
      },
      sells: {
        type: Number,
        default: 0
      }
    },
    computed: {
      shopSells() {
        if (this.sells >= 10000) {
          return Math.floor(this.sells / 1000) / 10 + '万';
        } else {
          return this.sells;
        }
      },
      shopGoodsCount() {
        if (this.goodsCounts >= 10000) {
          return Math.floor(this.goodsCounts / 1000) / 10 + '万'
        } else {
          return this.goodsCounts
        }
      }
    }
  }
</script>

<style scoped>
  .score {
    display: flex;
    justify-content: space-between;

    padding: 10px 0;
    font-size: 15px;
  }

  .goods-sells {
    flex: 1;
    text-align: center;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .goods-sells div {
    width: 100%;
  }

  .goods-sells div>p {
    width: 100%;
    margin: 0;
    padding: 5px 0;
  }
  .goods-sells div>p:first-child {
    font-size: 20px;
  }

  .goods-sells div:last-child>p {
    border-right: 1px solid rgba(105, 105, 105, 0.57);
  }


  .points {
    flex: 1;
    text-align: left;

  }
  .points table {
    width: 80%;
    margin: 0 auto;
  }

  .point td {
    padding: 5px;
  }

  .grade {
    color: rgba(0, 145, 0, 0.76);
  }
  .better {
    color: rgba(189, 0, 0, 0.87);
  }

  .rank {
    color: white;
    background: rgba(0, 145, 0, 0.76);
  }

  .good {
    background: rgba(189, 0, 0, 0.87);
  }

  .btn {
    text-align: center;
  }

  .btn button {
    border-radius: 15px;
    height: 28px;
    border: none;
    padding: 5px 25px;
    background: #bfbfbf;
    font-size: 13px;
  }
</style>
