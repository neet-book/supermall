import BackTop from "components/content/backTop/BackTop";

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    // 回到顶部
    toTop() {
      this.$refs.scroll.goTo(0, 0);
      this.isShowBackTop = false;
    }
  }
}
