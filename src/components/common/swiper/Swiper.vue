<template>
  <div id="swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :class="{swiperStyle}">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div class="indi-item" v-for="(item,index) in slideCount" 
          :class="{active:index === currentIndex - 1}"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'Swiper',
  props:{
    interval:{    //滚动时间间隔
      type:Number,
      default:3000 
    },
    animation:{   //延时
      type:Number,
      default:1000
    },
    moveRatio:{   //拖动触发比例
      type:Number,
      default:0.25
    },
    showIndicator:{ //是否显示指示器
      type:Boolean,
      default:true,
    },
  },
  data(){
    return {
      slideCount:0,   //元素个数
      totalWidth:0,   //swiper宽度
      swiperStyle:{}, //swiper样式
      currentIndex:1, //当前index
      scrolling:false,  //是否在移动
    }
  },
  mounted(){
    //1,操作DOM,前后添加slide
    setTimeout(() => {
      this.handleDom()
      //2,开启定时器
      this.satrtTimer()
    }, 100);
  },
  methods:{
    /* 定时器操作 */
    satrtTimer:function(){
      this.playTimer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval);
    },
    stopTimer:function(){
      window.clearInterval(this.playTimer)
    },
    /* 滚动到正确位置 */
    scrollContent:function(currentPosition){
      //0设置正在滚动
      this.scrolling = true
      //1滚动动画
      this.swiperStyle.transition = 'transform ' + this.animation +'ms'
      this.setTransform(currentPosition)
      //2判断滚动到的位置
      this.checkPosition()
      //3滚动完成
      this.scrolling = false
    },
    /* 校验正确的位置 */
    checkPosition:function(){
      window.setTimeout(()=>{
        //1.校验正确位置
        this.swiperStyle.transition = '0ms'
        if(this.currentIndex >= this.slideCount+1){
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.totalWidth)
        }else if(this.currentIndex <= 0){
          this.currentIndex = this.slideCount
          this.setTransform(-this.currentIndex * this.totalWidth)
        }
        //2,结束移动后的回调函数
        this.$emit('transitionEnd',this.currentIndex - 1)
      },this.animation)
    },
    /* 设置滚动的位置 */
    setTransform:function(position){
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px,0,0)`
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px,0,0)`
    },
    /* 操作DoM，在前后加入slide */
    handleDom:function(){
      //1.获取要操作的元素
      let swiperEl = document.querySelector('.swiper')
      let slidesEls = swiperEl.getElementsByClassName('slide')
      //2，保存个数
      this.slideCount = slidesEls.length
      //3.如果个数大于1在前后分别添加一个slide
      if(this.slideCount > 1){
        let cloneFirst = slidesEls[0].cloneNode(true)
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)
        swiperEl.insertBefore(cloneLast,slidesEls[0])
        swiperEl.appendChild(cloneFirst)
        this.totalWidth = swiperEl.offsetWidth
        this.swiperStyle = swiperEl.style
      }
      //4.让swiper元素显示第一个
      this.setTransform(-this.totalWidth)
    },
    /* 拖动事件的处理 */
    touchStart:function(e){
      //1,如果正在发生滚动，不可以拖动
      if(this.scrolling) return ;
      //2停止定时器
      this.stopTimer()
      //3保存拖动的位置
      this.startX = e.touches[0].pageX
    },
    touchMove:function(e){
      //1,计算出用户拖动的距离
      this.currentX = e.touches[0].pageX
      this.distance = this.currentX - this.startX
      let currentPosition = -this.currentIndex * this.totalWidth
      let moveDistance = this.distance + currentPosition
      //设置当前位置
      this.setTransform(moveDistance)
    },
    touchEnd:function(){
      //获取移动的距离
      let currentMove = Math.abs(this.distance)
      //判读最终距离
      if(this.distance == 0){
        return
      }else if(this.distance > 0 && currentMove > this.totalWidth * this.moveRatio){
        this.currentIndex--
      }else if(this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
        this.currentIndex++
      }
      //移动到正确位置
      this.scrollContent(-this.currentIndex * this.totalWidth)
      //移动完成后重启定时器
      this.satrtTimer()
    },
    /* 控制上一个，下一个 */
    previous:function(){
      this.changeItem(-1)
    },
    next:function(){
      this.changeItem(1)
    },
    changeItem:function(num){
      //1移除定时器
      this.stopTimer
      //2修改index和位置
      this.currentIndex += num
      this.scrollContent(-this.currentIndex * this.totalWidth)
      //3添加定时器
      this.satrtTimer()
    },
  },
  created(){

  }

}
</script>

<style>
  #swiper{
    overflow: hidden;
    position: relative;
  }
  .swiper{
    display: flex;
  }
  .indicator{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }
  .indi-item{
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;

  }
  .indi-item.active {
    background-color: rgba(212, 62, 46, 1.0);
  }
</style>