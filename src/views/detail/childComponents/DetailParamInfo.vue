<template>
  <div class="detail-param-info" v-if="Object.keys(detailParams).length > 0">
    <!--  尺寸  -->
    <table class="size-info" v-for="(sizeRule, index) of sizeRules" :key="index">
      <tr v-for="(rule, indey) of  sizeRule" :key="indey">
        <td v-for="(ruleItem, indez) of rule" :key="indez">{{ ruleItem }}</td>
      </tr>
    </table>
    <!--  产品信息  -->
    <table class="product-info" >
      <tr v-for="(info , index) of productInfos" :key="index">
        <td>{{ info.key }} </td> <td> {{ info.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      detailParams: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      sizeRules() {
        return this.detailParams.rule.tables;
      },
      productInfos() {
        return this.detailParams.info.set;
      }
    }
  }
</script>

<style scoped>
  .detail-param-info {
    border-top: 5px #e6e6e669 solid;
    border-bottom: 5px #e6e6e669 solid;
  }
 .detail-param-info table {
    width: 100%;
    text-align: left;
    font-size: 14px;

    padding: 15px  15px;
    border-spacing: 0px 0px;

  }
  .detail-param-info td {
    padding: 13px 0;
    border-bottom: 1px solid rgba(223, 223, 223, 0.45);
  }

  .size-info tr:last-child>td {
    border-bottom: 3px solid rgba(223, 223, 223, 0.45);
  }

  .product-info td:first-child{
    width: 20%;
  }

  .product-info td:last-child{
    color: var(--color-height-text);
  }
</style>
