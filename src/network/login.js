import { requestLogin } from "./request";

//获取登录结果
export function getLoginResult(data){
  return requestLogin({
    url:'/login',
    data:data
  })
}