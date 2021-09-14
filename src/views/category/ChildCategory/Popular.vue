<template>
  <div class="popular">
    <!-- 类别导航 -->
    <category-navigition></category-navigition>
    <!-- navbar -->
    <tab-control :titles="['综合','销量','新品']"></tab-control>
    <!-- 商品列表 -->
    <goods-list :goods="goods"></goods-list>
  </div>
</template>

<script>
import CategoryNavigition from './CategoryNavigition.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from  'components/content/goods/GoodsList.vue'

import  {getHomeGoods} from 'network/home.js'


export default {
  name:"Popular",
  components:{
    CategoryNavigition,
    TabControl,
    GoodsList
  },
  data(){
    return {
      goods:[]
    }
  },
  created(){
    //请求商品数据
    getHomeGoods().then(res =>{
        this.goods = res
        console.log(res);
      })
  }
  
}
</script>,
    TabControl

<style>
.tab-control {
  top: 0px;
}
</style>