import { request, requestMoGuJie} from "./request";

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

