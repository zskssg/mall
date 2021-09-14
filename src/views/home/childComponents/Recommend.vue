<template>
  <div id="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'Recommend',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  #recommend {
    display: flex;
    width: 100%;
    justify-items: center;
    text-align: center;
    background-color: #eaeaea;
  }
  .recommend-item {
    flex: 1;
    flex-shrink:1;
    padding: 8px 0;
    margin-bottom: 5px;
    background-color: #fff;
  }
  .recommend-item img {
    width: 65px;
    height: 65px;
    
  }
</style>