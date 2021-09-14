<template>
  <div class="featrue">
    <a href="https://act.mogujie.com/zzlx67">
      <h3>本周流行</h3>
      <div class="featrue-main">
        <div class="featrue-item">
          <img src="~assets/img/FeatrueImg/霸街长袖群.jpg" alt="">
          <p>霸街长袖裙</p>
        </div>
        <div class="featrue-item">
          <img src="~assets/img/FeatrueImg/时尚懒人套装.jpg" alt="">
          <p>时尚懒人套装</p>
        </div>
        <div class="featrue-item">
          <img src="~assets/img/FeatrueImg/微胖遮肉.jpg" alt="">
          <p>微胖遮肉穿搭</p>
        </div>
        <div class="featrue-item">
          <img src="~assets/img/FeatrueImg/鞋子.jpg" alt="">
          <p>降温保暖鞋</p>
        </div>
        <div class="featrue-item">
          <img src="~assets/img/FeatrueImg/v领.jpg" alt="">
          <p>颜值爆表穿搭裙</p>
        </div>
        <div class="featrue-item">
          <img src="~assets/img/FeatrueImg/v领.jpg" alt="">
          <p>小心机v领</p>
        </div>
        <div class="featrue-item">
          <img src="~assets/img/FeatrueImg/口红.jpg" alt="">
          <p>万圣节必备口红</p>
        </div>
        <div class="featrue-item">
          <img src="~assets/img/FeatrueImg/v领.jpg" alt="">
          <p>软萌暖心包包</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name:'FeatrueView'
}
</script>

<style>
  .featrue {
    width: 100%;
    margin-bottom: 10px;
  }
  .featrue>a {
    display: block;
    width: 100%;
    text-align: center;
  }
  .featrue h3 {
    border-bottom: 1px solid #eaeaea;
  }
  .featrue .featrue-main{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

  }
  .featrue-main .featrue-item{
    box-sizing: border-box;
    width: 22%;
    height: 60px;
    margin: 2px;
    
    text-align: center;
  }
  .featrue-main .featrue-item img{
    width: 100%;
    height: 50px;
    border: 1px solid #fff;
    border-radius:  20px 30px 20px 30px;
    background-color: #fff;
  }
  .featrue-main .featrue-item p {
    font-size: 10px;
    text-align: center;
    line-height: 10px;
    transform: scale(.9);
    white-space: nowrap;
  }
</style>