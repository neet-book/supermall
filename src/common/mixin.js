export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    // 回到顶部
    toTop() {
      this.$refs.scroll.goTo(0, 0);
      this.isShowBackTop = false;
    }
  }
}
