<template>
  <div class="img-slider clear-fix">
    <ul  class="img-slider-main" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :class="{swiperStyle}">
      <li>
        <img src="~assets/img/FeatrueImg/微胖遮肉.jpg" alt="">
      </li>
      <li>
        <img src="~assets/img/FeatrueImg/时尚懒人套装.jpg" alt="">
      </li>
      <li>
        <img src="~assets/img/FeatrueImg/鞋子.jpg" alt="">
      </li>
    </ul>
    <div class="img-slider-item">
      <span>{{currentIndexMessage}}</span>/
      <span>{{slideCountMessage}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'ImgSlider',
  data(){
    return{
      slideCount:0,   //元素个数
      totalWidth:0,   //swiper宽度
      swiperStyle:{}, //swiper样式
      currentIndex:0, //当前index
      scrolling:false,  //是否在移动
    }
  },
  computed:{
    currentIndexMessage(){
      return this.currentIndex+1
    },
    slideCountMessage(){
      return this.slideCount
    },
  },
  mounted(){
    //获取dom，并附data初始值
    let slider = document.querySelector('.img-slider-main')
    let items = slider.querySelectorAll('li')
    this.slideCount = items.length
    this.totalWidth = items[0].offsetWidth
    this.swiperStyle = slider.style
    console.log(this.totalWidth);
    //4.让swiper元素显示第一个
    this.setTransform(1)
    console.log(this.currentIndex);
  },
  methods:{
    /* 滚动到正确位置 */
    scrollContent:function(currentPosition){
      //0设置正在滚动
      this.scrolling = true
      //1滚动动画
      this.swiperStyle.transition = 'transform ' + 1000 +'ms'
      this.setTransform(currentPosition)
      //2判断滚动到的位置
      this.checkPosition()
      //3滚动完成
      this.scrolling = false
    },
    /* 校验正确的位置 */
    checkPosition:function(){
      
        //1.校验正确位置
        this.swiperStyle.transition = '0ms'
        if(this.currentIndex >= this.slideCount){
          this.currentIndex = this.slideCount-1
          this.setTransform(-this.currentIndex * this.totalWidth)
        }else if(this.currentIndex <= 0){
          this.currentIndex =0
          this.setTransform(-this.currentIndex * this.totalWidth)
        }

        //2,结束移动后的回调函数
        this.$emit('transitionEnd',this.currentIndex - 1)
      
    },
    /* 设置滚动的位置 */
    setTransform:function(position){
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px,0,0)`
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px,0,0)`
    },
    /* 拖动事件的处理 */
    touchStart:function(e){
      //1,如果正在发生滚动，不可以拖动
      if(this.scrolling) return ;
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
      console.log(currentMove);
      //判读最终距离
      if(this.distance == 0){
        return
      }else if(this.distance > 0 && currentMove > 50){
        this.currentIndex--
      }else if(this.distance < 0 && currentMove > 50){
        this.currentIndex++
      }
      //移动到正确位置
      console.log(this.currentIndex);
      this.scrollContent(-this.currentIndex * this.totalWidth)
    },
  }
}
</script>

<style>
  .img-slider {
    position: relative;
    width: 100%;
    height: 100vw;
    overflow: hidden;
  }
  .img-slider-main{
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    height: 100%;
    overflow-x: auto;
  }
  .img-slider-main li{
    list-style-type: none;
    width: 100%;
    height: 100%;
    
  }
  .img-slider-main li img {
    width: 100vw;
    height: 100%;
  }
  .img-slider-item {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    background-color: #666;
    border-radius: 10px;
  }
</style>