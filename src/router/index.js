import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import {firebase} from "../firebase/firebaseInit.js"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import( '../views/Prodcuts.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/Register.vue')
  },
  {
    path:'/forgot-password',
    name: 'Forgot Password',
    component: () => import ('../views/ForgotPassword.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import( '../components/Dashboard.vue'),
    children:[
      {
        path:'/profile',
        name: 'Profile',
        component: () => import ('../components/Profile.vue')
      },
      {
        path:'/consent',
        name: 'Consent',
        component: () => import ('../components/Consent.vue')
      },
      {
        path:'/fetchData',
        name: 'FetchData',
        component: () => import ('../components/FetchData.vue')
      },
      {
        path:'/personlization',
        name: 'Personlization',
        component: () => import ('../components/Personlization.vue')
      },
      {
        path:'/stats',
        name: 'Stats',
        component: () => import ('../components/Stats.vue')
      },
      {
        path:'/transactions',
        name: 'Transactions',
        component: () => import ('../components/Transactions.vue')
      }
    ],
    meta: {
       requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next)=>{
    let currentUser = store.state.userData;
    console.log(currentUser);
    let requriesAuth = to.matched.some(record => record.meta.requiresAuth);
    if(requriesAuth && !currentUser){
        const user = await firebase.auth().currentUser;
        if(user == null) {
          var email = localStorage.getItem('infor_email')
          console.log(email)
          await store.dispatch('setUser', email)
        }else{
          localStorage.setItem('infor_email', user.email)
          await store.dispatch('setUser', user.email)
        }
        next()
    }else{
        next()
    }
})

export default router
