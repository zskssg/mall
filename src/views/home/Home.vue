<template>
  
  <div id="home">
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
    <goods-list :goods="goods"></goods-list>
  </div>
  
</template>

<script>
import  {getHomeMultiData, getHomeGoods,getHomeGoodsDetails} from 'network/home.js'

import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from  'components/content/goods/GoodsList.vue'
import HomeSwiper from './childComponents/HomeSwiper.vue'
import Recommend from './childComponents/Recommend.vue'
import FeatrueView from './childComponents/FeatrueView.vue'


export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    Recommend,
    FeatrueView,
    TabControl,
    GoodsList,

  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:[]
    }
  },
  mounted(){
      //添加cookie
      let exdate = new Date()
      exdate.setTime(Number(exdate)+'200*1000')
      document.cookie = '_mwp_h5_token='+ escape('770ff533aa29b8fbab2c1a7cc7aa304b_1630578750743')
      document.cookie = '_mwp_h5_token_enc='+ escape('f0cb7fa0b491f041d5de240a833d2411')
      document.cookie = '__mgjuuid=' + escape('40836d25-af3e-45c9-918c-b21550d4c555')
      document.cookie = 'smidV2=' + escape('20210903101432acdfd3d8c590d56491a089f0f7bcd95a00ad08193c8c82ae0')
      document.cookie = '_ga=' + escape('GA1.2.709443786.1630668075')
      document.cookie = '__mgjref=' + escape('https%3A%2F%2Fh5.mogu.com%2Fitem-detail%2Fnormal.html%3Facm%3D3.ms.1_4_1mswd2g.43.1188-102777-68998.uR9YZs6KDIHCw.sd_117-swt_43-imt_6-c_1_4_573010591_0_0_3-t_uR9YZs6KDIHCw-lc_4-pit_1-qid_85360-dit_%26cparam%3DMTU5NjU5MjU3MV8xMWtfMzQ2MDFmYzMxMjJlYjQzM2E2ODk4Nzc0MWM2MTUzNzdfNF8wXzU3MzAxMDU5MV80ZjhmXzBfMF8wXzc3OF8xXzNfbG9jLTA%3D%26itemId%3D1mswd2g%26ptp%3D32.XPCOW.0.0.rH38KE0Z	')
      document.cookie = 'sm_deviceId_pc=' + escape('WHJMrwNw1k/GII+DhtZK8NEmwYRR5N+Qj2FJ44JmzfI2FAvPciD31O51ckrGkWhqr2eVu7sBtZAuujusqFUkUTJDtI5uGpBPsdCW1tldyDzmQI99+chXEikGfwAdX5rgc9lCUKKcsmkSqmJzoPeggwzYmmmXo8LlTkQE5YcNLqNo1CXZrYdSBTspoBAefPNug0KkjdOxv7Z/vFYPuaRMWF4gQ8Rc3EwH0sOdZSflTvgGeU8e7yYvwokgTGSUYxUQe1487582755342	')

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
      getHomeGoodsDetails().then(res =>{
        console.log(res);
      })


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