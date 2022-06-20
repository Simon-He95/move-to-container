import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { VividTyping } from 'vivid-typing'
import routes from 'virtual:generated-pages'
import { moveToContainer } from './../../src'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.component('MoveToContainer', moveToContainer)
app.component('VividTyping', VividTyping)
app.mount('#app')
