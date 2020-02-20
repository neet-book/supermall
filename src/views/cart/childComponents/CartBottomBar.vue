<template>
  <div class="bottom-bar">
    <div class="all-choose">
      <check-button :is-checked="isAllChecked" @click.native="changeAllChecked"></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">
      <div> ¥ {{ totalPrice }}</div>
    </div>
    <div class="calculate">
      去结算({{ cartCheckedLength }})
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  import { mapGetters } from 'vuex';
  import {CHANGE_ALL_CHECKED} from "../../../store/mutaition.type";
  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['totalPrice', 'cartCheckedLength', 'isAllChecked']),

    },
    methods: {
      changeAllChecked() {
        console.log(this.isAllChecked);
        this.$store.commit(CHANGE_ALL_CHECKED, !this.isAllChecked);
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e2e2e2;
  }
  .all-choose {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 13px;
  }
  .total-price {
    flex: 1;
    box-sizing: border-box;
    padding: 0 20px;
  }

  .calculate {
    flex: 0 0 auto;
    width: 90px;
    height: 38px;

    line-height: 38px;
    text-align: center;
    background: var(--color-tint);
  }
</style>
