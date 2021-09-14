
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

export function requestDetail(config){
    //1,创建axios实例
    axios.defaults.withCredentials = true;
    const instance = axios.create({
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
 // return jsonp(config)
}

   /* 
    jsonp函数封装
  */
 
/*     function jsonp(obj){
      //动态创建标签
      let script = document.createElement('script');
      //创建函数名  将小数点替换空去除
      let fnName = 'mwpCb1';
      //挂载全局函数
      //.后面只能跟属性，而fnName是变量，所以使用[]
      window[fnName] = obj.success;
  
      //拼接参数
      var params = '';
      for(let i in obj.data){
        params+='&'+i+'='+obj.data[i];
      }
  
      //添加src
      script.src = obj.url+'?callback='+fnName+params;
      
      document.body.appendChild(script);
      //script标签加载完成后删除
      script.onload = function(){
        document.body.removeChild(script);
      }
    } */
