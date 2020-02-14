<template>
  <div id="hy-swiper"
       @touchstart.prevent="touchStart"
       @touchmove.prevent="touchMove"
       @touchend.prevent="touchEnd"
  >
    <div class="swiper">
      <slot></slot>
    </div>
    <div class="indicator" >
      <slot name="indicator" v-if="slideCount > 1 && showIndicator">
        <div
          class="indi-item"
          :class="{ active: index === currentIndex - 1 }"
          v-for="(item, index) of slideCount" :key="index"
        >
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    data() {
      return {
        content: '',
        currentIndex: 1,
        slideCount: 0,
        playTimer: 0,
        swiperStyle: {},
        startX: 0,
        distance: 0,
        scrolling: false
      }
    },
    props: {
      // 滚动间隔(毫秒)
      interval: {
        type: Number,
        default: 3000
      },
      // 滚动动画持续时间
      animeDuration: {
        type: Number,
        default: 500,
      },
      // 手动切换轮播图移动比例
      moveRatio: {
        type: Number,
        default: 0.5
      },
      // 是否显示提示
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      setTimeout(() => {

        // 操作DOM，获取slide数量，swiper宽度，在前后添加slide
        this.handleDom();

        // 开启定时器
        this.startTimer();
      }, 100);
    },
    methods: {

      // 设置定时器
      startTimer() {
        this.playTimer = window.setInterval(() =>{
          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.totalWidth);
        }, this.interval);
      },

      // 取消定时
      stopTimer() {
        window.clearInterval(this.playTimer);
      },

      // 设置滚动图片
      setTransform(position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle[
          "-webkit-transform"
          ] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
      },
      scrollContent(currentPosition) {
        // 设置开始滚动
        this.scrolling = true;

        // 设置移动与动画
        this.swiperStyle.transition = 'transform ' + this.animeDuration + 'ms';
        this.setTransform(currentPosition);

        // 检查位置
        this.checkedPosition();

        // 滚动结束
        this.scrolling = false;
      },

      // 检查是否滚动到头部或尾部
      checkedPosition() {
        window.setTimeout(() => {
          // 关闭动画
          this.swiperStyle.transition = '0ms';

          // 检查位置
          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth);
          } else if ( this.currentIndex <= 0) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }

          // 结束移动回调
          this.$emit('transitionEnd', this.currentIndex - 1);
        }, this.animeDuration);
      },

      // 操作DOM
      handleDom() {
        let swiperEL = document.querySelector('.swiper');
        let slidesEL = document.querySelectorAll('.slide');
        this.slideCount = slidesEL.length;

        // 如果轮播图数量大于1就在前后再插入一张轮播图
        if (this.slideCount > 1) {
          let cloneFiest = slidesEL[0].cloneNode(true);
          let cloneLast = slidesEL[this.slideCount -1].cloneNode(true);
          swiperEL.insertBefore(cloneLast, slidesEL[0]);
          swiperEL.appendChild(cloneFiest);
          console
          this.totalWidth = swiperEL.offsetWidth;
          this.swiperStyle = swiperEL.style;

          // 将轮播图显示为第一张
          this.setTransform(-this.totalWidth)
        }
      },
      // 处理拖动事件
      touchStart(event) {
        console.log(event);

        if(this.scrolling) return;
        // 停止定时器
        this.stopTimer();
        // 记录点击的位置
        this.startX = event.touches[0].pageX;
      },
      touchMove(event) {
        this.content = "move";

        this.distance = event.touches[0].pageX - this.startX;
        let currentPosition = -this.currentIndex * this.totalWidth + this.distance;
        // 移动位置
        this.setTransform(currentPosition);
      },
      touchEnd() {
        let moveDistance = Math.abs(this.distance);
        if (this.distance < 0 &&
            moveDistance > this.totalWidth * this.moveRatio) {
          this.currentIndex++;
        } else if (this.distance > 0 &&
          moveDistance > this.totalWidth * this.moveRatio) {
          this.currentIndex--;
        }
        // 移动到正确位置
        this.scrollContent(-this.currentIndex * this.totalWidth);
        this.startTimer();

      }
    }
  }
</script>

<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
    /*height: 350px;*/
  }
  .swiper {
    display: flex;
    /*height: 350px;*/
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px
  }

  .indi-item {
    box-sizing: border-box;
    border-radius: 4px;
    width: 8px;
    height: 8px;
    margin: 0 5px;
    background: #00BFFF51;
  }
  .active {
    background: #00BFFF;
  }
</style>
