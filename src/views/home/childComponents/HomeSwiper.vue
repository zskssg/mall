<template>
  <div class="swiper-position">
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
  name:'homeSwiper',
  components:{
    Swiper,
    SwiperItem,
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style>
 .swiper-position {
   position: relative;
   padding-top: 44px;
   width: 100%;
 }
</style>