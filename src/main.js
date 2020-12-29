import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import telaLogin from './components/telaLogin.vue'
import telaLista from './components/telaLista.vue'
import telaInclusaoItem from './components/telaInclusaoItem.vue'
import store from './store.js'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
     {path: '/', component: telaLogin}
    ,{path:'/lista', component: telaLista}
    ,{path: '/incluir', component: telaInclusaoItem}
  ]
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
