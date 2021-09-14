<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
    <!-- src中使用别名路径 需要在前面加入~  -->
      <template v-slot:item-icon>
        <img  src="~assets/img/tabbar/首页.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img  src="~assets/img/tabbar/首页-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div >首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
     <template v-slot:item-icon>
        <img src="~assets/img/tabbar/分类.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img  src="~assets/img/tabbar/分类-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div >分类</div>
      </template>
      
      

      
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:item-icon>
        <img  src="~assets/img/tabbar/购物车.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/购物车-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
      
      

      
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <img   src="~assets/img/tabbar/我的.png" alt="">

      </template>
      <template v-slot:item-icon-active>
       <img src="~assets/img/tabbar/我的-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>

    </tab-bar-item>

  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name:"MainTabBar",
  components:{
    TabBar,
    TabBarItem,
  }
}
</script>

<style>

</style>