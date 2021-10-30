<template>
  <div class="goods-list">
    <div class="goods-list-item" v-for="(item,index) in goods" :key="index">
      <div @click="this.$router.push(this.url + item.num_iid)">
        <div>
          <img :src="item.pic_url" alt="">
        </div>
        <p class="text">{{item.title}}</p>
        <div class="price">
            ￥{{item.price}}
        </div>
        <div class="sale-volume">
          销量{{item.mogujie_cfav}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsList',
  data(){
    return {
      url:'/goods-detail/'
    }
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed:{
  }
}
</script>

<style>
  .goods-list {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: stretch;
    scrollbar-width: none

  }
  .goods-list-item {
    display: block;
    width: 45%;
    border-radius: 20px;
    margin: 5px 5px;

    text-align: center;
    
  }
  .goods-list-item img {
    width: 100%;
    height: 220px;
    padding-top: 5px;
    border-radius: 20px;

  }
  .goods-list-item .text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .goods-list-item .sale-volume {
    display: inline-block;
    font-size: 12px;
    text-align: right;
    color: purple;
  }
  .goods-list-item .price {
    display: inline-block;
    color: rgb(219, 24, 56);
    text-align: left;
    width: 50%;
  }
</style>