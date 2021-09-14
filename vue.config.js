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
    proxy: {
      '/api': {
        target: 'https://api.mogu.com',   //代理接口
        changeOrigin: true,
        source:false,
        pathRewrite: {
          '^/api': ''    //代理的路径
        }
      }
    }
  }
  
 }