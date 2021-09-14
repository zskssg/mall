<template>
  <tab-bar class="recommend-detail">
    <tab-bar-item>
      <template v-slot:item-icon>
        <img  src="~assets/img/tabbar/店铺.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>店铺</div>
      </template>
    </tab-bar-item>
    <tab-bar-item>
      <template v-slot:item-icon>
        <img   src="~assets/img/tabbar/聊天.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>客服</div>
      </template>
    </tab-bar-item>
    <tab-bar-item>
      <template v-slot:item-icon>
        <img   src="~assets/img/tabbar/收藏.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>收藏</div>
      </template>
    </tab-bar-item>
    <tab-bar-item class="goods-car">
      <template v-slot:item-text>
        <div class="add">加入购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item class="goods-buy">
      <template v-slot:item-text>
        <div class="buy" @click="buy">立即购买</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'


export default {
  name:'DetailTabBar',
  emits:['buyModuleShows'],
  components:{
    TabBar,
    TabBarItem

  },
  methods:{
    buy:function(){
      this.$emit('buyModuleShows')
    }
  }
}
</script>

<style>
  .recommend-detail {
    width: 100%;
    font-size: 12px;
  }
  .recommend-detail img {
    width: 15px;
    height: 15px;
  }
  .goods-car {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d4237a;
    background-color: rgb(231, 211, 211);
  }
  .goods-buy {
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    background-color: #d4237a;
  }
</style>