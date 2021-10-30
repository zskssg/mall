<template>
  <div id="cart">
    <nav-bar class="nav-bar-cart">
      <template v-slot:left>
        <div class="nav-bar-cart-left">
          <h3>购物车</h3>
          <p>共<span>0</span>件商品</p>
        </div>
      </template>
      <template v-slot:right>
        <div>管理</div>
      </template>
    </nav-bar>
    <!-- 购物车商品列表 -->
    <div class="cart-goods-list">
      <div class="goods-list-item">
        <div class="goods-item-header">
          <div class="checkbox " :class="{active:false}"></div>
          <div class="trade-name">
            鸿星尔克官方旗舰店
          </div>
        </div>
        <ul class="goods-item-detail-list">
          <li class="goods-item-detail" v-for="(v,index) in goodsData" :key="index" >
            <div class="goods-item-detail-left">
              <div class="checkbox"></div>
            </div>
            <div class="goods-item-detail-right" >
              <img class="image" :src="v.pic_url" alt="商品logo">
              <div class="goods-item-detail-right-content">
                <p class="title">{{v.title}}</p>
                <p class="cancels">{{v.color}}/{{v.size}}(建议拍大一码)</p>
                <div class="price-number">
                  <span class="price">￥{{v.price}}</span>
                  <div class="number">
                    <button>x{{v.number}}</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'


export default {
  name:"Cart",
  components:{
    NavBar,
  },
  data(){
    return {
      cartData:{}
    }
  },
  computed:{
    goodsData() {
      return this.cartData
    }
  },
  created(){
    //将store里的数据存到carData中
    this.cartData = this.$store.state.cartData
    console.log(this.goodsData);
  }
}
</script>

<style scoped>
  #cart {
    height: 100vh;
    position: relative;
    background-color: rgba(192, 184, 184, 0.2);
  }
  .nav-bar-cart {
    box-sizing: border-box;
    height: 10vh;
    line-height: 30px;
    border-bottom: 1px solid #eaeaea;
    background-color: #fff;
  }
  .nav-bar-cart-left{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
  }
  .nav-bar-cart-left p {
    line-height: 15px;
  }

  .cart-goods-list {
    position: relative;
    top: 10vh;
    margin:2px 5vw;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    background-color: #fff;
    border-radius: 15px;
  }
  .cart-goods-list .checkbox{
    width: 15px;
    height: 15px;
    margin-left: 5px;
    outline: none;
    border: 1px solid;
    border-color: #aaa;
    border-radius: 10px;
  }
  .cart-goods-list .checkbox.active{
    background-color: #d4258b;
    border: 1px solid tomato;
  }
  .goods-item-header {
    width: 90vw;
    line-height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
  }
  .goods-item-header .trade-name {
    margin-left: 2vw;
    white-space: nowrap;
  }
  .goods-item-detail-list {
    margin-left: 2vw;
  }
  .goods-item-detail {
    width: 88vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding-bottom: 5px;
    margin-bottom: 5px;
    background-color: #fff;
    border-bottom: 1px solid rgba(192, 184, 184, 0.2);
  }
  .goods-item-detail-left {
    width: 8vw;
    text-align: center;
  }
  .goods-item-detail-right{
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .goods-item-detail-right .image {
    width: 20vw;
    height: 70%;
    vertical-align: middle;
    background-color: lawngreen;
  }
  .goods-item-detail-right-content {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
  }
  .goods-item-detail-right-content .title {
    width: 50vw;
    white-space: nowrap;
    overflow: hidden;
    line-height: 18px;
  }
  .goods-item-detail-right-content .cancels {
    width: 50vw;
    line-height: 30px;
    white-space: nowrap;
    overflow: hidden;
    background-color: #eaeaea;
  }
  .goods-item-detail-right-content .price-number {
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 10px;
  }
  .goods-item-detail-right-content .price-number .price {
    font-size: 14px;
    font-weight: 700;
    color: #d4258b;
  }

  .goods-item-detail-right-content .price-number .number button {
    width: 30px;
    line-height: 20px;
    font-size: 12px;
    font-weight: 700;
    background-color: #fff;
    border: 1px solid #eaeaea;
  }
</style>

