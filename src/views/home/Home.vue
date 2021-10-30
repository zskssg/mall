<template>
  
  <div id="home" ref="home" >
    <!-- navbar -->
    <nav-bar class="nav-bar-home">
      <template v-slot:center>
        <h2>首页</h2>
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 推荐 -->
    <recommend :recommends="recommends"></recommend>
    <!-- 本周流行 -->
    <featrue-view></featrue-view>
    <!-- tabControl -->
    <tab-control id="tab-control-home" :titles="['流行','精选','新款']"></tab-control>
    <!-- 商品列表 -->
    <goods-list class="good-list" :goods="goods"></goods-list>
    <!-- 返回顶部 -->
    <back-top ref="backtop"  @click="backTop"></back-top>
  </div>
  
</template>

<script>
import  {getHomeMultiData, getHomeGoods} from 'network/home.js'

import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from  'components/content/goods/GoodsList.vue'
import HomeSwiper from './childComponents/HomeSwiper.vue'
import Recommend from './childComponents/Recommend.vue'
import FeatrueView from './childComponents/FeatrueView.vue'
import BackTop from 'components/content/backTop/BackTop.vue'


export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    Recommend,
    FeatrueView,
    TabControl,
    GoodsList,
    BackTop,
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:[]
    }
  },
  mounted(){
      //请求数据
      getHomeMultiData().then((res)=>{
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      getHomeGoods().then(res =>{
        this.goods = res
        console.log(res);
      })

      //window对象，所有浏览器都支持window对象。表示浏览器窗口，监听滚动事件
      window.addEventListener('scroll',this.scrollToTop,true)
  },
  unmounted(){
    window.removeEventListener('scroll',this.scrollToTop)
  },
  methods:{
    backTop(){
      console.log(document.body.scrollTop);
    }
  }

}
</script>

<style>
.nav-bar-home{
  background-color: pink;
}
#tab-control-home {
  top: 44px;
}
</style>