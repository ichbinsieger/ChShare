import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/RegisterView.vue'
import Login from '../views/LoginView.vue'
import Reset from '../views/ResetPassword.vue'
import SinglePost from '../views/SinglePostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title:'home'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta:{
      title:'register'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      title:'login'
    }
  },
  {
    path: '/resetpassword',
    name: 'reset',
    component: Reset,
    meta:{
      title:'Reset password'
    }
  },
  {
    path: '/post',
    name: 'SinglePost',
    component: SinglePost
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next) =>{
  document.title = `${to.meta.title} | ChShare`;
  next();
})

export default router
