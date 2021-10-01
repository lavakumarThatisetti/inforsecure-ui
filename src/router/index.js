import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
