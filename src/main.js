import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)
Vue.config.productionTip = false;

let router = new VueRouter({
routes: Routes,
mode: 'history',
});
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
