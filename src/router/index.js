import { createRouter, createWebHistory } from 'vue-router'

//懒加载
const Home =  ()=> import('../views/home/Home.vue')
const Category = ()=> import('../views/category/Category.vue')
const Cart = ()=> import('../views/cart/Cart.vue')
const Profile = ()=> import('../views/profile/Profile.vue')
const GoodsDetail = ()=> import('../views/goods/GoodsDetail.vue')
const Popular = ()=> import('../views/category/ChildCategory/Popular.vue')

const routes = [
  
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/category',
    component:Category,
    children:[    //子路由
      {
        path:'',
        component:Popular
      },
      {
        path:'popular',
        component:Popular
      }
    ]
  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/goods-detail',
    component:GoodsDetail,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode:'history'
})

export default router
