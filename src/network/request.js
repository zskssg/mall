
import axios from 'axios'

export function request(config) {
  //1,创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000,
  })

  //2拦截器
  //请求拦截
  instance.interceptors.request.use((config)=>{
      //拦截处理后返回config
      console.log(config);
      return config
    },
    (err)=>{console.log(err);}
  )
  //响应拦截
  instance.interceptors.response.use(
    (res)=>{
      //拦截处理后返回res
      return res=res.data
    },
    err =>{
      console.log(err);
    }
  )
  //3发送网络请求
  return instance(config)   //返回promise对象
}

export function requestMoGuJie(config) {
  //1,创建axios实例
  const instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000,
  })

  //2拦截器
  //请求拦截
  instance.interceptors.request.use((config)=>{
      //拦截处理后返回config
      
      return config
    },
    (err)=>{console.log(err);}
  )
  //响应拦截
  instance.interceptors.response.use(
    (res)=>{
      //拦截处理后返回res
      return res=res.data
    },
    err =>{
      console.log(err);
    }
  )
  //3发送网络请求
  return  instance(config);
}
/* Login请求 */
export function requestLogin(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL:'http://localhost:3000',
    method:'post',
    timeout:5000,
    headers:{ 'Content-Type':'application/x-www-form-urlencoded'},   //post请求，默认将请求数据作json向后端传送
    withCredentials:true    //  请求携带cookie
  })
    //2拦截器
  //响应拦截
  instance.interceptors.response.use(
    (res)=>{
      //拦截处理后返回res
      return res=res.data
    },
    err =>{
      console.log(err);
    }
  )

  //3发送网络请求
  return  instance(config);
}