<template>
  <module-box>
    <template v-slot:header>
      <div class="header-left">
        <img src="~assets/img/FeatrueImg/微胖遮肉.jpg" alt="" class="clear-fix">
        <div class="header-left-goods-cancels">
          <div class="price">￥49.9</div>
          <div class="stock">库存：<num>11189</num>件</div>
          <div class="style">
            <div class="no-null" v-if="cancel">已选:<span>{{goodsCancels.color}}</span><span>{{goodsCancels.size}}</span></div>
            <div class="null" v-if="cancel2">请选择<span v-if="goodsCancels.size == ''">尺码</span> <span v-if="goodsCancels.color == ''">颜色</span></div>
          </div>
        </div>
        <div class="module-box-cancel" @click="cancelBack"></div>
      </div>
    </template>
    <template v-slot:main>
      <div class="main-goods-cancel">
        <div class="color">
          <div class="title">颜色</div>
          <div class="items">
            <button>白色</button>
            <button>雾蓝色</button>
            <button>浅咖色</button>
          </div>
        </div>
        <div class="size">
          <div class="title">尺码</div>
          <div class="items">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
        </div>
        <div class="number">
          <div class="title">数量</div>
          <div class="items">
            <button v-if=" !(goodsCancels.number==0)" @click="goodsCancels.number -= 1">-</button>
            <input type="text" v-model="goodsCancels.number">
            <button @click="goodsCancels.number += 1">+</button>
          </div>
        </div>
        <div class="serve">
          <div class="title">服务</div>
          <div class="content">
            <div>
              <span>意外换新</span>
              <p>衣物意外破损五折换新</p>
              
            </div>
            <div>
              <p>服务说明</p>
            </div>
          </div>
          <button>意外换新|￥2.50</button>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="footer-operate">
        <a href="">
          确认
        </a>
      </div>
    </template>

  </module-box>
</template>

<script>
import ModuleBox from 'components/content/moduleBox/ModuleBox.vue'

export default {
  name:'GoodsModuleBox',
  emits:['buyModuleShow'],
  components:{
    ModuleBox,
  },
  data(){
    return {
      flag:true,
      goodsCancels:{
        color:'',
        size:'',
        number:1
      },
    }
  },
  computed:{
    cancel:function(){
      if(this.goodsCancels.color == this.goodsCancels.size)
        return false
      else
        return true
    },
    cancel2:function(){
      if(this.goodsCancels.color != '' && this.goodsCancels.size !='')
        return false
      else
        return true
    }
  },
  // 钩子函数
  mounted(){
    let that = this;
    let colorItems = document.querySelectorAll('.color .items button')
    let sizeItems = document.querySelectorAll('.size .items button')
    console.log(this.goodsCancels);
    //activeStyle
    function activeStyle(elParent,el){
      
      if(el.classList[0] == 'active')
        for(let i=0; i<elParent.length;i++)
          elParent[i].classList.remove('active')
      else{
        for(let i=0; i<elParent.length;i++)
          elParent[i].classList.remove('active')
        el.classList.add('active')
      }
        
    }


    /* 选择颜色 */
    for(let i=0; i < colorItems.length; i++){
      colorItems[i].addEventListener('click',function(){
        if(that.goodsCancels.color == '')
          that.goodsCancels.color = this.innerText;
        else if(that.goodsCancels.color == this.innerText)
          that.goodsCancels.color = '';
        else
          that.goodsCancels.color = this.innerText;
        //点击元素添加样式
        activeStyle(colorItems,this)
      })
    }
    /* 选择尺寸 */
    for(let i=0; i<sizeItems.length; i++){
      sizeItems[i].addEventListener('click',function(){
          if(that.goodsCancels.size=='')
            that.goodsCancels.size = this.innerText;
          else if(that.goodsCancels.size == this.innerText)
            that.goodsCancels.size = '';
          else
            that.goodsCancels.size = this.innerText;
          //点击元素添加样式
          activeStyle(sizeItems,this)
      })
    }
  },
  methods:{
    cancelBack(){
      this.flag = !this.flag
      this.$emit('buyModuleShow')
    }
  }
}
</script>

<style>
  .module-box-cancel {
    position: absolute;
    top: 10px;
    right: 0px;
    width: 50px;
    height: 50px;
    background: url('~assets/img/icon/取消.png') top center no-repeat;
    background-size: 15px 15px;
    z-index: 999;
  }
.main-goods-cancel .items .active{
  color: #d4237a;
  border: 1px solid #d4237a;
}
.header-left {
  width: 100%;
  height: 20vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  
}
.header-left img {
  position: relative;
  top: -50px;
  width: 80px;
  height: 120px;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.3);
  margin-left: 10px;
  margin-right: 10px;
}
.header-left-goods-cancels {
  display: flex;
  
  flex-direction: column;
  justify-content: left;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 12px;
  color: #333;
}
.header-left-goods-cancels .price {
  font-size: 14px;
}
.header-left-goods-cancels .stock {
  font-size: 14px;
}
.header-left-goods-cancels .style {
  display: flex;
  flex-direction: row;
  justify-content:left;
  align-items: center;
}
.header-left-goods-cancels .style span {
  font-weight: 700;
  margin: 0px 2px;
}
.header-left-goods-cancels .style .no-null span {
  color: #d4237a;
}

.main-goods-cancel {
  width: 100%;
  height: 43vh;
  display: flex;
  flex-direction: column;
  justify-content: left;
  
}
.main-goods-cancel>div {
  margin: 10px 10px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
}
.main-goods-cancel .title{
  text-align: left;
  color: #999;
  margin: 3px 3px 3px 0px;
}
.main-goods-cancel .items{
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
.main-goods-cancel .items button {
  width: 60px;
  box-sizing: border-box;
  font-size: 12px;
  padding: 5px 10px;
  margin: 0px 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.main-goods-cancel .number input{
  width: 60px;
  text-align: center;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.main-goods-cancel .serve .content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
}
.main-goods-cancel .serve .content>div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0px;
}
.main-goods-cancel .serve .content span {
  font-size: 13px;
  color: #333;
  margin-right:20px;
}
.footer-operate{
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #d4237a;
}
.footer-operate a {
  font-size: 14px;
  color: #fff;
}
</style>