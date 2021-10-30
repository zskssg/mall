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
      return ((this.$route.path.indexOf('goods-detail') === -1) && this.$route.path !== '/login')  ? true:false
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
