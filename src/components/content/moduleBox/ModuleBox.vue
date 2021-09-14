<template>
  <div class="module-box" >
      <div >
        <div class="module-box-header">
          <slot name="header">
          </slot>
          
        </div>
        <div class="module-box-main">
          <slot name="main"></slot>
        </div>
        <div class="module-box-footer">
          <slot name="footer"></slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'ModuleBox',
  
  props:{

  },
  data(){
    return {

    }
  },
  methods:{

  },

}
</script>

<style>
  .module-box {
    position:fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(100, 100, 100, .5);
  }
  .module-box>div{
    position: relative;
    top: 30vh;
  }
  .module-box-header {
    position: relative;
    width: 100%;
    background-color: #fff;
  }

  .module-box-main {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .module-box-footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #fff;
  }
</style>