<template>
  <div class="checked-button" :class="{'is-checked': isChecked}"></div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .checked-button {
    box-sizing: border-box;

    width: 18px;
    height: 18px;
    margin: 5px;

    border-radius: 50%;
    border: 1px solid;
    /*background-color: rgba(255, 91, 135, 0.75);*/
  }
  .is-checked {
    background-image: url("~assets/img/cart/tick.svg");
    background-size: 12px 12px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #ff6580;

    border: none;
  }
</style>
