import { createStore } from 'vuex'

 const store = createStore({
  state: {
    cartData:[],  //  购物车数据列表
  },
  mutations: {
    //向购物车数据列表追加
    addData(state,payload) {    //payload载荷即参数
      state.cartData.push(payload)
    }
    //删除相应的数据

  },
  actions: {
  },
  modules: {
  }
})

export default store