<template>
  <div class="goods-detail">
    <!-- navbar -->
    <nav-bar class="goods-detail-nav-bar">
      <template v-slot:left>
        <img class="icon" @click="back()" src="~assets/img/NavBar/返回.png" alt="">
      </template>
      <template v-slot:right>
        <img class="icon" src="~assets/img/NavBar/更多.png" alt="">
      </template>
    </nav-bar>
    <!-- 图片展示 -->
    <img-slider>
    </img-slider>
    <!-- 商品基本信息 -->
    <div class="goods-detail-message">
      <div class="goods-detail-message-top">
        <div>￥<span class="price">222.00</span></div>
        <div>已售<span class="sales-volume">23</span></div>
      </div>
      <div class="goods-detail-message-bottom">
        <div class="title">梅子熟了甜美少女翻领拼接设计感小众法式针织开衫女3.28</div>
        <div class="help">帮我选</div>
      </div>
    </div>
    <!-- 商品操作 -->
    <div class="goods-detail-oprate">
      <!-- 商品挑选 -->
      <div class="choose"  @click="buyModuleShow()">
        <div>
          <span class="text">选择</span>
          <div class="choose-detail">
            <div class="choose-detail-end" v-if="cancel">
              <p>
                <strong>已选：</strong>
                <span>{{goodsModuleBox.color}}</span>
                <span>{{goodsModuleBox.size}}</span>
              </p>
            </div>
            <span v-if="goodsModuleBox.size == ''">尺码</span><span v-if="goodsModuleBox.color == ''">颜色</span>
            </div>
        </div>
        <div >
          <img class="icon" src="~assets/img/goodsDetail/goods更多.png" alt="">
        </div>
      </div>
      <!-- 商品服务 -->
      <div class="service" @click="serviceModuleShow()">
        <div>
          <span class="text">免邮费</span>
          <div>
            浙江嘉兴
          </div>
        </div>
        <div>
          <div>
            <span class="text">服务</span>
            <div class="service-detail"><span>72小时发货</span><span>7天无理由退货</span><span>延误必赔</span></div>
          </div>
          <div>
            <img class="icon" src="~assets/img/goodsDetail/goods更多.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 商品评价 -->
    <div class="goods-detail-discuss">
      <div>
        <span>评价</span>(<span>0</span>)
      </div>
      <div>
        <span>暂无评价</span>
      </div>
    </div>
    <!-- 店铺 -->
    <div class="goods-detail-home">
      <div class="goods-detail-home-icon">
        <img src="~assets/img/FeatrueImg/v领.jpg" alt="">
      </div>
      <div class="goods-detail-home-detail">
        <div class="title">
          <span class="text">梅子熟了原创自制</span>
          <div>
            <span>进店</span>
            <img class="icon" src="~assets/img/goodsDetail/goods更多.png" alt="">
          </div>
        </div>
        <div class="grade">
          <ul>
            <li>
                <svg t="1631069413023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5429" width="200" height="200"><path d="M789.333333 981.333333c-8.533333 0-12.8 0-21.333333-4.266666l-256-136.533334-256 136.533334c-17.066667 4.266667-34.133333 4.266667-46.933333-4.266667-12.8-8.533333-21.333333-25.6-17.066667-42.666667l51.2-285.866666-209.066667-204.8c-12.8-12.8-17.066667-29.866667-12.8-42.666667 8.533333-12.8 21.333333-25.6 38.4-25.6l285.866667-42.666667 128-260.266666c12.8-29.866667 64-29.866667 76.8 0l128 260.266666 285.866667 42.666667c17.066667 0 29.866667 12.8 38.4 25.6 4.266667 17.066667 0 34.133333-12.8 42.666667l-209.066667 204.8 51.2 285.866666c4.266667 17.066667-4.266667 34.133333-17.066667 42.666667-8.533333 4.266667-17.066667 8.533333-25.6 8.533333zM512 750.933333c8.533333 0 12.8 0 21.333333 4.266667l200.533334 106.666667-38.4-221.866667c-4.266667-12.8 4.266667-29.866667 12.8-38.4l162.133333-157.866667-226.133333-34.133333c-12.8 0-25.6-12.8-34.133334-21.333333L512 183.466667 413.866667 384c-8.533333 12.8-21.333333 21.333333-34.133334 25.6l-226.133333 34.133333L315.733333 597.333333c8.533333 8.533333 12.8 25.6 12.8 38.4l-38.4 221.866667 200.533334-106.666667h21.333333z" p-id="5430" fill="#d4237a"></path></svg>
              </li>
            <li>
                <svg t="1631069413023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5429" width="200" height="200"><path d="M789.333333 981.333333c-8.533333 0-12.8 0-21.333333-4.266666l-256-136.533334-256 136.533334c-17.066667 4.266667-34.133333 4.266667-46.933333-4.266667-12.8-8.533333-21.333333-25.6-17.066667-42.666667l51.2-285.866666-209.066667-204.8c-12.8-12.8-17.066667-29.866667-12.8-42.666667 8.533333-12.8 21.333333-25.6 38.4-25.6l285.866667-42.666667 128-260.266666c12.8-29.866667 64-29.866667 76.8 0l128 260.266666 285.866667 42.666667c17.066667 0 29.866667 12.8 38.4 25.6 4.266667 17.066667 0 34.133333-12.8 42.666667l-209.066667 204.8 51.2 285.866666c4.266667 17.066667-4.266667 34.133333-17.066667 42.666667-8.533333 4.266667-17.066667 8.533333-25.6 8.533333zM512 750.933333c8.533333 0 12.8 0 21.333333 4.266667l200.533334 106.666667-38.4-221.866667c-4.266667-12.8 4.266667-29.866667 12.8-38.4l162.133333-157.866667-226.133333-34.133333c-12.8 0-25.6-12.8-34.133334-21.333333L512 183.466667 413.866667 384c-8.533333 12.8-21.333333 21.333333-34.133334 25.6l-226.133333 34.133333L315.733333 597.333333c8.533333 8.533333 12.8 25.6 12.8 38.4l-38.4 221.866667 200.533334-106.666667h21.333333z" p-id="5430" fill="#d4237a"></path></svg>

            </li>
            <li>
                <svg t="1631069413023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5429" width="200" height="200"><path d="M789.333333 981.333333c-8.533333 0-12.8 0-21.333333-4.266666l-256-136.533334-256 136.533334c-17.066667 4.266667-34.133333 4.266667-46.933333-4.266667-12.8-8.533333-21.333333-25.6-17.066667-42.666667l51.2-285.866666-209.066667-204.8c-12.8-12.8-17.066667-29.866667-12.8-42.666667 8.533333-12.8 21.333333-25.6 38.4-25.6l285.866667-42.666667 128-260.266666c12.8-29.866667 64-29.866667 76.8 0l128 260.266666 285.866667 42.666667c17.066667 0 29.866667 12.8 38.4 25.6 4.266667 17.066667 0 34.133333-12.8 42.666667l-209.066667 204.8 51.2 285.866666c4.266667 17.066667-4.266667 34.133333-17.066667 42.666667-8.533333 4.266667-17.066667 8.533333-25.6 8.533333zM512 750.933333c8.533333 0 12.8 0 21.333333 4.266667l200.533334 106.666667-38.4-221.866667c-4.266667-12.8 4.266667-29.866667 12.8-38.4l162.133333-157.866667-226.133333-34.133333c-12.8 0-25.6-12.8-34.133334-21.333333L512 183.466667 413.866667 384c-8.533333 12.8-21.333333 21.333333-34.133334 25.6l-226.133333 34.133333L315.733333 597.333333c8.533333 8.533333 12.8 25.6 12.8 38.4l-38.4 221.866667 200.533334-106.666667h21.333333z" p-id="5430" fill="#d4237a"></path></svg>
            </li>
            <li>
                <svg t="1631069413023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5429" width="200" height="200"><path d="M789.333333 981.333333c-8.533333 0-12.8 0-21.333333-4.266666l-256-136.533334-256 136.533334c-17.066667 4.266667-34.133333 4.266667-46.933333-4.266667-12.8-8.533333-21.333333-25.6-17.066667-42.666667l51.2-285.866666-209.066667-204.8c-12.8-12.8-17.066667-29.866667-12.8-42.666667 8.533333-12.8 21.333333-25.6 38.4-25.6l285.866667-42.666667 128-260.266666c12.8-29.866667 64-29.866667 76.8 0l128 260.266666 285.866667 42.666667c17.066667 0 29.866667 12.8 38.4 25.6 4.266667 17.066667 0 34.133333-12.8 42.666667l-209.066667 204.8 51.2 285.866666c4.266667 17.066667-4.266667 34.133333-17.066667 42.666667-8.533333 4.266667-17.066667 8.533333-25.6 8.533333zM512 750.933333c8.533333 0 12.8 0 21.333333 4.266667l200.533334 106.666667-38.4-221.866667c-4.266667-12.8 4.266667-29.866667 12.8-38.4l162.133333-157.866667-226.133333-34.133333c-12.8 0-25.6-12.8-34.133334-21.333333L512 183.466667 413.866667 384c-8.533333 12.8-21.333333 21.333333-34.133334 25.6l-226.133333 34.133333L315.733333 597.333333c8.533333 8.533333 12.8 25.6 12.8 38.4l-38.4 221.866667 200.533334-106.666667h21.333333z" p-id="5430" fill="#e6e6e6"></path></svg>
            </li>
            <li>
                <svg t="1631069413023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5429" width="200" height="200"><path d="M789.333333 981.333333c-8.533333 0-12.8 0-21.333333-4.266666l-256-136.533334-256 136.533334c-17.066667 4.266667-34.133333 4.266667-46.933333-4.266667-12.8-8.533333-21.333333-25.6-17.066667-42.666667l51.2-285.866666-209.066667-204.8c-12.8-12.8-17.066667-29.866667-12.8-42.666667 8.533333-12.8 21.333333-25.6 38.4-25.6l285.866667-42.666667 128-260.266666c12.8-29.866667 64-29.866667 76.8 0l128 260.266666 285.866667 42.666667c17.066667 0 29.866667 12.8 38.4 25.6 4.266667 17.066667 0 34.133333-12.8 42.666667l-209.066667 204.8 51.2 285.866666c4.266667 17.066667-4.266667 34.133333-17.066667 42.666667-8.533333 4.266667-17.066667 8.533333-25.6 8.533333zM512 750.933333c8.533333 0 12.8 0 21.333333 4.266667l200.533334 106.666667-38.4-221.866667c-4.266667-12.8 4.266667-29.866667 12.8-38.4l162.133333-157.866667-226.133333-34.133333c-12.8 0-25.6-12.8-34.133334-21.333333L512 183.466667 413.866667 384c-8.533333 12.8-21.333333 21.333333-34.133334 25.6l-226.133333 34.133333L315.733333 597.333333c8.533333 8.533333 12.8 25.6 12.8 38.4l-38.4 221.866667 200.533334-106.666667h21.333333z" p-id="5430" fill="#e6e6e6"></path></svg>
            </li>
          </ul>
          <div class="vertical-line"></div>
          <div><span>在架商品</span><span>640</span></div>
        </div>
        <div class="heat">
          <span>11.2万人关注</span>
          <span>累计销量5.2万+</span>
        </div>
      </div>
    </div>
    <!-- tabcontrol -->
    <tab-control class="goods-detail-tab" :titles="['图文详情','商品参数','流行推荐']">
    </tab-control>
    <!-- 图文详情 -->
    <ul class="goods-detail-images" >
      <li><img src="~assets/img/FeatrueImg/微胖遮肉.jpg" alt=""></li>
      <li><img src="~assets/img/FeatrueImg/霸街长袖群.jpg" alt=""></li>
      <li><img src="~assets/img/FeatrueImg/微胖遮肉.jpg" alt=""></li>
      <li><img src="~assets/img/FeatrueImg/霸街长袖群.jpg" alt=""></li>
      <li><img src="~assets/img/FeatrueImg/微胖遮肉.jpg" alt=""></li>
      <li><img src="~assets/img/FeatrueImg/霸街长袖群.jpg" alt=""></li>
      <li><img src="~assets/img/goodsDetail/尺码图.webp" alt=""></li>
      <li><img src="~assets/img/goodsDetail/价格说明.webp" alt=""></li>


    </ul>
    <!-- 商品参数 -->
    <div class="goods-detail-parameter">
      <h5>商品参数</h5>
      <div class="parameters">
        <ul>
          <li>
            <span>袖型</span><span>常规袖</span>
          </li>
          <li>
            <span>衣门襟</span><span>单排扣</span>
          </li>
          <li>
            <span>穿着方式</span><span>开襟</span>
          </li>
          <li>
            <span>元素</span><span>磨破</span>
          </li>
          <li>
            <span>尺码</span><span>S,XL,L,M</span>
          </li>
        </ul>
        <div class="parameters-more">
          <span>查看全部</span>
          <img src="~assets/img/goodsDetail/goods更多.png" alt="">
        </div>
      </div>
    </div>
    <!-- 热卖推荐 -->
    <div class="goods-detail-recommend">
      <div class="recommend-title">
        <div class="recommend-line"></div>
        <div class="icon">
          <img src="~assets/img/goodsDetail/推荐.png" alt="">
        </div>
        <div>热卖推荐</div>
        <div class="recommend-line"></div>
      </div>
      <div class="recommend-goods">
        <goods-list :goods="goods"></goods-list>
      </div>
    </div>
    <!-- tab-bar -->
    <detail-tab-bar @buyModuleShows = "buyModuleShow"></detail-tab-bar>
    <!-- 购物车模态框 -->
    <div v-show="flagState">
      <goods-module-box ref="goodsModuleBox"   @buyModuleShow = "buyModuleShow"></goods-module-box>
    </div>
    <!-- 商品服务模态框 -->
    <div v-show="serviceFlagState">
      <goods-service-module-box @serviceModuleShow = "serviceModuleShow"></goods-service-module-box>
    </div>
  </div>

</template>

<script>
import  {getHomeGoods} from 'network/home.js'
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from  'components/content/goods/GoodsList.vue'
import DetailTabBar from 'components/content/detailTabBar/DetailTabBar.vue'

import ImgSlider from './childGoods/ImgSlider.vue'
import GoodsModuleBox from './childGoods/GoodsModuleBox.vue'
import GoodsServiceModuleBox from './childGoods/GoodsServiceModuleBox.vue'



export default {
  
  name:'GoodsDetail',
  components:{
    NavBar,
    ImgSlider,
    TabControl,
    GoodsList,
    DetailTabBar,
    GoodsModuleBox,
    GoodsServiceModuleBox,
  },
  data(){
    return {
      goods:[],
      flag:true,
      serviceFlag:true,
      goodsModuleBoxData:{
        color:'',
        size:'',
        number:0,
      },
    }
  },
  computed:{
    flagState(){
      return !this.flag
    },
    serviceFlagState(){
      return !this.serviceFlag
    },
    goodsModuleBox(){
      //返回子组件模态框选择数据
      return this.goodsModuleBoxData
    },
    cancel:function(){
      if(this.goodsModuleBox.color == this.goodsModuleBox.size)
        return false
      else
        return true
    },
    cancel2:function(){
      if(this.goodsModuleBox.color != '' && this.goodsModuleBox.size !='')
        return false
      else
        return true
    }
  },
  mounted(){
    getHomeGoods().then(res =>{
        this.goods = res
        console.log(res);
      })
      //返回子组件模态框选择数据
    this.goodsModuleBoxData = this.$refs.goodsModuleBox.goodsCancels
  },
  methods:{
    back(){
      //返回上一页
      this.$router.back()
    },
    buyModuleShow(){
      this.flag = !this.flag
       //返回子组件模态框选择数据
      this.goodsModuleBoxData = this.$refs.goodsModuleBox.goodsCancels
    },
    serviceModuleShow(){
      this.serviceFlag = !this.serviceFlag
    }
  }
}
</script>

<style>


  .goods-detail{
    width: 100%;
    overflow: hidden;
  }
  .goods-detail-nav-bar {
    width: 100%;
    padding: 20px;
  }
  .goods-detail-nav-bar .icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    opacity: 0.7;
  }
  .goods-detail-message {
    width: 100%;
    height: 90px;
    background-color: #fff;
    border-bottom: 5px solid #eaeaea;
  }
  .goods-detail-message-top {
    width: 100%;
    display: flex;
    justify-content:space-between;
    margin: 10px 0px;
  }
  .goods-detail-message-top div{
    margin: 0px 20px;
  }
  .goods-detail-message-top .price{
    margin-left: 3px;
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }
  .goods-detail-message-top .sales-volume {
    margin-left: 3px;
    font-size: 14px;
    font-weight: 700;
    color: pink;
  }
  .goods-detail-message-bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    
  }
  .goods-detail-message-bottom .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 70%;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  .goods-detail-message-bottom .help {
    line-height: 30px;
    padding-left: 20px;
  }
  /* 商品操作 css */
  .goods-detail-oprate{
    width: 100%;
    border-bottom: 5px solid #eaeaea;
  }
  .goods-detail-oprate .icon {
    width: 15px;
    height: 15px;
    margin: 5px;
  }
  .goods-detail-oprate .choose {
    display: flex;
    justify-content: space-between;
    margin: 5px;
  }
  .goods-detail-oprate .choose>div {
    display: flex;
  }
  .goods-detail-oprate .choose .text {
    font-size: 12px;
    margin-left: 10px;
  }
  .goods-detail-oprate .choose .choose-detail {
    display: flex;
    flex-direction: row;
    margin-left: 5px;
  }

  .goods-detail-oprate .choose .choose-detail span {
    color: #333;
    padding:0px 5px;
  }
  .goods-detail-oprate .choose .choose-detail .choose-detail-end span {
    color: #d4237a;
  }
  .goods-detail-oprate .service {
    width: 100%;
    padding: 5px;
    line-height: 30px;
  }
  .goods-detail-oprate .service div{
    display: flex;
    justify-content: space-between;
  }
  .goods-detail-oprate .service .text{
    font-size: 12px;
    margin-left: 10px;
  }
  .goods-detail-oprate .service .service-detail {
    font-size: 12px;
    color: #333;
    margin-left: 5px;
  }
  .goods-detail-oprate .service .service-detail span {
    margin:0px 5px;
    font-weight: 700;
  }
  .goods-detail-discuss {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 5px solid #eaeaea;
  }
  .goods-detail-discuss>div {
    margin: 10px;
  }
  .goods-detail-discuss>div span {
    color: #333;
    font-weight: 600;
    font-size: 12px;
  }

  .goods-detail-home {
    display: flex;
    justify-content: space-around;
    width: 100%;
    border-bottom: 5px solid #eaeaea;
  }
  .goods-detail-home-icon {
    display: flex;
    width: 30%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .goods-detail-home-icon img {
    width: 20vw;
    height:20vw;

  }
  .goods-detail-home-detail {
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: left;
  }
  .goods-detail-home-detail .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
  }
  .goods-detail-home-detail .title .text {
    color: #333;
    font-weight: 600;
  }
  .goods-detail-home-detail .title span {
    padding: 5px;
  }
  .goods-detail-home-detail .title img {
    width: 23px;
    height: 23px;
    padding-top: 10px;
    padding-right: 10px;
  }
  .goods-detail-home-detail .grade {
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
  .goods-detail-home-detail .grade ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
  }
  .goods-detail-home-detail .grade ul li svg {
    width: 15px;
    height: 15px;
  }
  .goods-detail-home-detail .grade .vertical-line {
    border: 1px solid #999;
    margin: 2px 10px;
  }
  .goods-detail-home-detail .grade span {
    font-size: 12px;
    margin: 0px 5px;
  }
  .goods-detail-home-detail .heat {
    display: flex;
    justify-content: space-evenly;
    font-size: 12px;
    margin: 5px;
  }
  .goods-detail-home-detail .heat span {
    display: inline-block;
    padding:0px 5px;
    color: #d4237a;
    border: 1px solid #e6e6e6;
    border-radius: 10px;

  }
  .goods-detail-tab{
    top: 0;
    width: 100%;
    height: 44px;
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
  }

  .goods-detail-images {
    width: 100%;
    overflow: hidden;
  }
  .goods-detail-images li img{
    width: 100vw;
    margin-top: 5px;
  }

  .goods-detail-parameter {
    width: 100%;
    padding: 10px;
  }
  .goods-detail-parameter .parameters {
    background-color: #eaeaea;
    margin: 10px;
  }
  .goods-detail-parameter .parameters span {
    display: inline-block;
    width: 40%;
    text-align: left;
    margin-left: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    font-size: 12px;
    font-size: #333;
  }
  .goods-detail-parameter .parameters span:nth-child(1){
    color: #999;
  }
  .goods-detail-parameter .parameters-more {
    width: 100%;
    padding-bottom: 20px;
  }
  .goods-detail-parameter .parameters-more span {
    display: inline;
  }
  .goods-detail-parameter .parameters-more img {
    width: 12px;
    height: 12px;
    padding-top: 2px;
  }

  .goods-detail-recommend{
    width: 100%;
    overflow: hidden;
    margin-bottom: 100px;
  }
  .goods-detail-recommend .recommend-title {
    display: flex;
    height: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #eaeaea;
  }
  .recommend-title .recommend-line {
    width: 30px;
    height: 2px;
    margin:5px;
    background-color: #ccc;
  }
  .recommend-title .icon img {
    width: 15px;
    height: 15px;
    
  } 
  .goods-detail-recommend .recommend-goods {
    width: 100%;
  }

</style>