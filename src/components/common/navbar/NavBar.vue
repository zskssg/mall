<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-bar-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-bar-right">
      <slot name="right"></slot>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-bar{
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: fixed;
    top: 0px;
    z-index: 1;
  }
  .nav-bar-left,.nav-bar-right{
    padding: 2px 15px;
  }
  .nav-bar-center{
    flex: 1;
  }
</style>