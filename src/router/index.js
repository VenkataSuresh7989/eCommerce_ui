import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../components/MainLayout.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Dashboard from '../views/Dashboard.vue'
import DetailedView from '../views/DetailedView.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import CustomersList from '../views/CustomersList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout
  },
  {
    path: '/forgotpwd',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/customers',
    name: 'CustomersList',
    component: CustomersList
  },
  {
    path: '/detailview',
    name: 'DetailedView',
    component: DetailedView
  },
  {
    path: '*',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  let getAuthKey = sessionStorage.getItem("auth_token");
  let token = "";
  if((getAuthKey != undefined) && (getAuthKey != null))
  {
    let getAuthToken = localStorage.getItem('auth_token' + getAuthKey.toString());
    if((getAuthToken != undefined) && (getAuthToken != null))
    {
      token = getAuthToken;
    }
    else
    {
      token = "";
    }
  }
  else
  {
    token = "";
  }

  if(token == "") {
    (to.path === '/' || to.path === '/forgotpwd') ? next() : next("/");
  }
  else {
    (to.path === '/' || to.path === '/forgotpwd' || to.path === null) ? next('/dashboard') : next();    
  }
})

export default router
