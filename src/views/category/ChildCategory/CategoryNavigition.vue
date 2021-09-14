<template>
  <div class="category-navigition">
    <div class="category-navigition-item">
      <a href="#">
        <img src="~assets/img/CategoryNavigition/裙子套装.webp" alt="">
        <p>裙子套装</p>
      </a>
    </div>
    <div class="category-navigition-item">
      <a href="#">
        <img src="~assets/img/CategoryNavigition/连衣裙.webp" alt="">
        <p>连衣裙</p>
      </a>
    </div>
    <div class="category-navigition-item">
      <a href="#">
        <img src="~assets/img/CategoryNavigition/短袖.webp" alt="">
        <p>短袖</p>
      </a>
    </div>
    <div class="category-navigition-item">
      <a href="#">
        <img src="~assets/img/CategoryNavigition/时尚套装.webp" alt="">
        <p>时尚套装</p>
      </a>
    </div>
    <div class="category-navigition-item">
      <a href="#">
        <img src="~assets/img/CategoryNavigition/半身裙.webp" alt="">
        <p>半身裙</p>
      </a>
    </div>
    <div class="category-navigition-item">
      <a href="#">
        <img src="~assets/img/CategoryNavigition/防晒衣.webp" alt="">
        <p>防晒衣</p>
      </a>
    </div>
    <div class="category-navigition-item">
      <a href="#">
        <img src="~assets/img/CategoryNavigition/背心.webp" alt="">
        <p>背心</p>
      </a>
    </div>
    <div class="category-navigition-item">
      <a href="#">
        <img src="~assets/img/CategoryNavigition/短裤.webp" alt="">
        <p>短裤</p>
      </a>
    </div>
    <div class="category-navigition-item">
      <a href="#">
        <img src="~assets/img/CategoryNavigition/卫衣.webp" alt="">
        <p>卫衣</p>
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name:'CategoryNavigition'
}
</script>

<style>
  .category-navigition {
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content:flex-start;
  }
  .category-navigition-item {
    width: 70px;
    margin:10px 7px;
    text-align: center;
    overflow: hidden;
  }
  .category-navigition-item img{
    width: 55px;
    height: 55px;
    vertical-align: middle;
  }
  .category-navigition-item p {
    padding-top: 10px;
    font-size: 12px;
  }
</style>