<template>
  <div class="tab-bar-item" @click="itemClick">

    <div v-if="!isActive" >
      <slot name="item-icon"></slot>
    </div>
    <div v-else >
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle" >
      <slot name="item-text"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'#d4237a'
    }
  },
  data(){
    return {
      //isActive:true,
    }
  },
  computed:{
    isActive(){
        //当$route中的path和传递的路由path值相同时，即不等于-1 为选中
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false 
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      //当被选中时改变文字的颜色
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
       if (this.$route.path !== this.path) {
          this.$router.replace(this.path)
       }
    }
  }

}
</script>

<style>
  .tab-bar-item{
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>