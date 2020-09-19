import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "register" */ '../views/auth/Login.view'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( /* webpackChunkName: "register" */ '../views/auth/Register.view'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard-home',
    name: 'Home',
    component: () => import( /* webpackChunkName: "dashboard-home" */ '../components/Dashboard/Home/Home.component')
  },
  {
    path: '/dashboard-product',
    name: 'Product',
    component: () => import( /* webpackChunkName: "dashboard-product" */ '../components/Dashboard/Product/All/Product.component')
  },
  {
    path: '/dashboard-product/:id',
    name: 'ProductDetail',
    component: () => import( /* webpackChunkName: "dashboard-product-detail" */ '../components/Dashboard/Product/All/ProductDetail.component')
  },
  {
    path: '/dashboard-user',
    name: 'User',
    component: () => import( /* webpackChunkName: "dashboard-user" */ '../components/Dashboard/User/User.component')
  },
  {
    path: '/dashboard-user/:id',
    name: 'UserDetail',
    component: () => import( /* webpackChunkName: "dashboard-user-detail" */ '../components/Dashboard/User/UserDetail.component')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => !record.meta.requiresAuth)) {
    !localStorage.getItem("token") ? next({
      path: '/login',
    }) : next()
  } else {
    next() // make sure to always call next()!
  }
})

export default router