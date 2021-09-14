<template>
  <div class="tab-control">
    <div 
    v-for="item,index in titles" 
    :key="index" 
    class="tab-control-item"
    :class="{active: index === currentIndex}"
    @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0,
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-top: 1px solid #eaeaea;
    background-color: #fff;
    /* 浏览器自动在距top值处将position属性改为fixed */
    position: sticky;   
    top: 44px;
  }
  .tab-control-item {
    flex: 1;
    line-height: 30px;
    background-color: #fff;
  }
  .tab-control-item span {
    padding: 0 15px;
    border-bottom: 2px solid #fff;
  }
  .tab-control-item.active span {
    border-bottom: 2px solid pink;
    color: pink;
  }
</style>