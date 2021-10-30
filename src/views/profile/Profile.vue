<template>
  <div id="profile">
    <header class="personal" v-if="!flag && info !== null">
        <div class="profile-img"><img src="~assets/img/profile/profileImg.jpg" alt="头像"></div>
        <div class="personal-info">
          <i>用户名</i><span>{{info.username}}</span>
          <i>性别</i><span v-if="info.sex == 1">男</span>
                    <span v-else>女</span>
          <i>年龄</i><span>{{info.age}}</span>
        </div>
        <div class="personal-account">
          <i>账号</i>
          <span>{{info.account}}</span>
        </div>
    </header>
    <header class="personal" v-else>
      <p class="message">您还未登录，请先去登录</p>
       <button class="personal-login" @click="login">去登录</button>
    </header>
    <main class="profile-main">
      <div class="profile-main-moudle">
        <div>我的订单</div>
        <div>优惠卷</div>
        <div>收藏夹</div>
        <div>我的足迹</div>
        <div>收货地址</div>
      </div>
    </main>
    <footer class="profile-logout" v-if="!flag && info !== null">
        <button class="profile-logout-btn" @click="logout">退出登录</button>
    </footer>
  </div>
</template>

<script>
export default {
  name:"Profile",
  data(){
    return {
      info: {},
      flag:false,   //默认为false，用户未登录不显示
    }
  },
  mounted(){
    this.info = JSON.parse(window.sessionStorage.getItem('userinfo'))   //获取sessionstorage里的登录用户信息
  },
  methods:{
    login(){  // 去登录
      this.$router.push('/login')
    },
    logout(){   //退出登录
      this.info = null,
      this.flag = true,
      window.sessionStorage.removeItem('userinfo')
    }
  }
}
</script>

<style>
  #profile {
    width: 100vw;
    overflow-x: hidden;
  }
  #profile .personal {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eaeaea;
  }
  .profile-img {
    width: 30vw;
    height: 30vw;
    margin: 20px 0;
    border-radius: 15vw;
    border: 3px solid salmon;
    overflow: hidden;
  }
  .profile-img img {
    width: 100%;
  }
  .personal-info {
    width: 100vw;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .personal-info>span{
    margin: 0 10px;
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
  .personal-account {
    width: 60vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .personal-account>span {
     margin: 0 10px;
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
  .profile-main {
    width: 100vw;
  }
  .profile-main-moudle {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .profile-main-moudle>div {
    box-sizing: border-box;
    width: 80%;
    margin-left:10vw;
    line-height: 30px;
    margin-top: 10px;
  }
  .profile-main-moudle>div:active {
    font-weight: 700;
    color: #333;
    border-left: 3px solid #333;
    background-color: peachpuff;
  }
  .profile-logout {
    width: 100vw;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profile-logout-btn ,.personal-login  {
    width: 50vw;
    line-height: 30px;
    text-align: center;
    border: 2px solid transparent;
    border-radius: 5px;
    background-color: pink;
  }
  .profile-logout-btn:active,.personal-login:active {
    background-color: purple;
    color: #fff;
    border: 2px solid salmon;
  }
</style>