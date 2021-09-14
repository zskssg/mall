<template>
  <div class="app">
    <div v-if="flagMessage">
      <router-view></router-view>
      <main-tab-bar></main-tab-bar>
    </div>
    <div v-else>
      <router-view></router-view>

    </div>
    
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'App',
  components:{
    MainTabBar
  },
  data(){
    return{}
  },
  computed:{
    flagMessage(){
      console.log(this.$route.path);
      return this.$route.path !== '/goods-detail' ? true:false
    }
  }
}
</script>

<style>
@import url(./assets/css/base.css);
.app {
  position: relative;
}

</style>
