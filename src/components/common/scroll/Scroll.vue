<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        default: 0,
        validator(value) {
          return value >=0 && value <= 3;
        }
      },
      pullUpLoad: Boolean,
      mouseWheel: Boolean,
      pullDownRefresh: Boolean,
      click: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      // 配置滚动
        this._initScroll(this.$props);
    },
    methods: {
      // 设置滚动
      _initScroll(config) {
        this.scroll = new BetterScroll(this.$refs.wrapper, config);

        // 抛出事件
        // 上拉
        if (this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp', this.scroll);
          });
        }

        // 滚动
        if (this.probeType) {
          this.scroll.on('scroll', position => {
            this.$emit('scroll', position);
          });
        }

        // 下拉
        if (this.pullDownRefresh) {
          this.scroll.on('pullingDown', () => {
            this.$emit('pullingDown', this.scroll);
          });
        }
      },

      // 前往指定位置
      goTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time);
      }
    }
  }
</script>

<style scoped>

</style>
