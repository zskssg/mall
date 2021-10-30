const path = require('path')
 
 module.exports ={
   configureWebpack:{
     resolve:{
       alias:{
        'assets':'@/assets',
        'components':'@/components',
        'views':'@/views',
        'network':'@/network',
       }
     },
   },
   devServer: {
    host:'localhost',
    port:8080,
    proxy: {
      '/api': {
        target: 'http://lcoalhost:3000',   //代理接口
        changeOrigin: true,
        source:false,
        pathRewrite: {
          '^/api': ''    //代理的路径
        }
      }
    }
  }
  
 }