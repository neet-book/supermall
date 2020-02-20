<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      showToast(message = '成功', durations = '1000') {
        this.message = message;
        this.isShow = true;

        setTimeout(() => { this.isShow = false}, durations);
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 10px 20px;

    color: white;
    text-align: center;

    box-shadow: 0 0 4px -1px #000;
    background: rgba(70, 70, 70, 0.83);

    z-index: 999;
  }
</style>
