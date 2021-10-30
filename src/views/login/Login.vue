<template>
<div id="login">
  <div class="login-main">
    
    <h1>login</h1>
    <p class="hint" v-show="flag">{{message}}</p>
    <form @submit.prevent="login()">
      <div>
        <label for="username">用户名:</label>
        <input type="text" name="username" v-model="form.username">
      </div>
      <div>
        <label for="password">密码:</label>
        <input type="password" name="password" v-model="form.password">
      </div>
      <div class="login">
        <input type="submit" value="登录">
      </div>
    </form>
    <div>
      <a href="#">忘记密码？</a>
      <a href="#">注册用户</a>
    </div>
  </div>
</div>
</template>

<script>
import {getLoginResult} from 'network/login.js'

export default {
  name:'Login',
  data(){
    return {
      form: {
        username:'',
        password:''
      },
      flag:false,   //提示信息默认false
      message:'用户名或者密码错误'
    }
  },
  methods: {
    login(){
      console.log('提交了登录');
      console.log(this.form);
      getLoginResult({username:this.form.username,password:this.form.password})
      .then((res)=>{
        if(res){
          //登录成功
          this.flag = false
          //向sessionStorage添加响应的用户信息
          window.sessionStorage.setItem('userinfo',JSON.stringify(res))
          //跳转返回
          window.history.back()
        }
        else{
          this.flag = true
        console.log('登录失败');
        }

      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
}
</script>

<style>
  #login {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #4c7c6f;
  }
  .login-main{
    width: 100vw;
    height: 100vw;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
    box-shadow: 5px 5px 10px #333;
    background-color: rgba(29, 53, 20, 0.6);
    opacity: .5;
  }
  .login-main:hover{
    opacity: 1;
  }
  .login-main h1{
    margin-top: 30px;
    color: seashell;
    text-shadow: 5px 5px 10px #223e36;
    text-align: center;
  }
  .login-main .hint {
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    color: red;
    margin-top: 20px;
  }
  .login-main form{
    width: 100%;
    margin-top: 40px;
  }
  .login-main form div{
    position: relative;
    margin: 10px auto;

  }
  .login-main form div label {
    display: inline-block;
    width: 80px;
    padding-right: 8px;
    text-align: right;
    font-size: 14px;
    color: seashell;
  }
  .login-main form div input{
    width: 200px;
    font-size: 16px;
    padding:5px;
    outline: none;
    border: 0;
    background-color: rgba(253, 245, 252, 0.5);
  }
  .login-main form div input:focus{
    background-color: #fff;;
  }
  .login-main form .login input{
    height: 50px;
    text-align: center;
    margin: 30px 0;
    margin-left: 50px;
    border: 2px solid #223e36;
    border-radius: 10px;
    font-size: 18px;
    color: seashell;
    background-color: seagreen;
    cursor: pointer;
  }
  .login-main form .login input:focus{
    background-color: seagreen;
  }
  .login-main form .login input:active{
    background-color: sienna;
    border: 2px solid #fff;
  }
  .login-main>div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .login-main>div a{
    width: 40%;
    text-decoration: none;
    font-size: 14px;
    color: seashell;
    text-align: center;
  }
  .login-main>div a:hover{
    font-size: 15px;
    color: #fff;
    font-weight: 700;
    text-shadow: 1px 1px  4px #fff;
  }
</style>