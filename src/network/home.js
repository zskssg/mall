import { request, requestMoGuJie ,requestDetail } from "./request";

//获取首页多个数据
export function getHomeMultiData() {
  return request({
    url:'/home/multidata',
  })
}

//获取首页商品数据
export function getHomeGoods(){
  return requestMoGuJie({
    url:'/goods',
  })
}

export function getHomeGoodsDetails(){
  return requestDetail({
    url:'/api/h5/http.detail.api/1/',
    params:{
      data:{
        "template":"6-2-detail_normal-1.0.0",
        "iid":"1n1fkni",
        "debug":false,
        "smbi":true,
        "sourceParams":"null"
      },
      'mw-appkey':100028,
      'mw-ttid':'NMMain@mgj_h5_1.0',
      'mw-t':1630918312766,
      'mw-uuid':'40836d25-af3e-45c9-918c-b21550d4c555',
      'mw-h5-os':'iOS',
      'mw-sign':'b0533c002cb632a961ecf99125b8de84',
      'callback':'mwpCb1',
      '_':1630918312770
    }

  })
  /* return new Promise(function(resolve){
    requestDetail({
      url:'https://api.mogu.com/h5/http.detail.api/1/?data=%7B%22template%22%3A%226-2-detail_normal-1.0.0%22%2C%22iid%22%3A%221n1ghh4%22%2C%22debug%22%3Afalse%2C%22smbi%22%3Atrue%2C%22sourceParams%22%3A%22null%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t=1630893269888&mw-uuid=40836d25-af3e-45c9-918c-b21550d4c555&mw-h5-os=iOS&mw-sign=84083ca1dc0776824e0c7a6d9d3d2a48&callback=mwpCb1&_=1630893269894',
      data:{
        
      },
      dataType: "jsonp",
      crossDomain:true,
      success:function(data){
        console.log(123);
        console.log(data);
        resolve(data)
      },
    })
  }) */
}