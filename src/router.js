import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import logIn from './components/logIn.vue'
import singUp from './components/singUp.vue'
import home from './components/home.vue'
import contact from './components/contact.vue'
import main from './components/main.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },

  {
    path: '/ClinicaTuEsperanza/home',
    name: 'home',
    component: home
  },

  {
    path: '/user/login',
    name: 'logIn',
    component: logIn
  },

  {
    path: '/user/singup',
    name: 'singUp',
    component: singUp
  },

  {
    path: '/contact',
    name: 'contact',
    component: contact
  },

  {
    path: '/main',
    name: 'main',
    component: main
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
