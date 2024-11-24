import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import MainPage from './components/MainPage.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'

const routes = [
  {
    path:'/',
    name:'MainPage',
    component: MainPage
  },
  {
    path:'/newUser',
    name:'signUp',
    component: SignUp
  },
  {
    path:'/user',
    name:'signIn',
    component: SignIn
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App).use(router).mount('#app')
