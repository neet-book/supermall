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
      this.$nextTick(() => {
        this.setScroll(this.$props);
      });
    },
    methods: {
      // 设置滚动
      setScroll(config) {
        // console.log(config);
        this.scroll = new BetterScroll(this.$refs.wrapper, config);

        // 抛出事件
        // 上拉
        this.scroll.on('pullingUp', () => {
          // console.log('ex')
          this.$emit('pulling-up', this.scroll);
        });

        // 滚动
        this.scroll.on('scroll', position => {
          // console.log(position);
          this.$emit('scroll', position);
        });

        // 下拉
        this.scroll.on('pullingDown', () => {
          this.$emit('pulling-down', this.scroll);
        });

        setTimeout(()=> this.scroll.refresh(), 300);
      },

      // 回到顶部
      goTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time);
      }
    }
  }
</script>

<style scoped>

</style>
