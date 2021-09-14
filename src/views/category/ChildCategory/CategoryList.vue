<template>

  <div class="category-list">
    <div class="category-list-item"
      v-for="(item,index) in categorylist"
      :key="index"
      @click="clickItem(index)"
      :class="{itemActive:currentIndex === index}"
      
      >
      <div>{{item}}</div>
    </div>
  </div>
  
</template>

<script>
export default {
  name:'CategoryList',
  data(){
    return {
      currentIndex:0,
    }
  },
  props:{
    categorylist:{
      type:Array,
      default(){
        return ['正在流行','上衣','裤子','裙子','内衣','女鞋','男友','包包','运动','配饰','美妆','个护']
      }
    }
  },
  methods:{
    clickItem(index){
      this.currentIndex = index
      this.$router.push({ path: '/category/popular' })
    }
  }
}
</script>

<style>
  .category-list{
    display: flex;
    width: 70px;
    height: 100%;
    text-align: center;
    flex-direction: column;
    font-size: 12px;
    background-color: #eaeaea;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .category-list-item{
    width: 100%;

    line-height: 40px;
  }
  .itemActive{
    background-color: #fff;
    color: pink;
    font-weight: 700;
  }
  .itemActive div{
    width: 100%;
    border-left: 4px solid purple;
  }
</style>