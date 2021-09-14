<template>
  <div id="category">
    <!-- nav-bar -->
    <nav-bar class="nav-bar-category" >
      <template v-slot:left>
        <img class="icon" src="~assets/img/NavBar/聊天.png" alt="">
      </template>
      <template v-slot:center>
        <div class="input">
          韩版新款连衣裙
        </div>
      </template>
      <template v-slot:right>
        <img class="icon" src="~assets/img/NavBar/购物车-23.png" alt="">
      </template>
    </nav-bar>
    <!-- 侧边栏分类列表 -->
    <div class="category-main">
      <div class="category-main-left left">
        <category-list :categorylist="['正在流行','上衣','裤子','裙子','内衣','女鞋','男友','包包','运动','配饰','美妆','个护','家居','百货','百货','食品']">
        </category-list>
      </div>
      <div class="category-main-right right clear-fix">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CategoryList from './ChildCategory/CategoryList.vue'


export default {
  name:"Category",
  components:{
    NavBar,
    CategoryList,

  }
}
</script>

<style>
  #category {
    height: 568px;
    overflow: hidden;
  }
  .nav-bar-category {
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
  }
  .nav-bar-category .icon {
    width: 20px;
    height: 20px;
  }
  .nav-bar-category .input{
    width: 100%;
   
    line-height: 27px;
    text-align: left;
    margin-top: 5px;
    font-size: 12px;
    color: #999;
    background-color: #eaeaea;
    border-radius: 5px;
  }
  .nav-bar-category .input::before{
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    content: "";
    background: url('~assets/img/NavBar/搜索.png') center center no-repeat;
    background-size: 15px 15px;
    margin-left: 5px;
  }
  .category-main {
    display: flex;
    justify-content: space-between;
  }
  .category-main-left {
    padding-top: 44px;
    width: 63px;
    height: 524px;
    overflow: hidden;
  }
  .category-main-right {
    position: relative;
    top: 44px;
    flex: 1;
    height: 568px;
    background-color: #fff;
    overflow-y: auto;
  }
</style>