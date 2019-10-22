import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'
// import axios from 'axios'

import  {library} from '@fortawesome/fontawesome-svg-core'
import  {faSpinner}  from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon}  from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()
library.add(fab);
library.add(fas);
library.add(faSpinner);
// axios.defaults.baseUrl = 'http://127.0.0.1:8000/api'
Vue.use('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false;
Vue.filter('extract-content', function (value) {
  
  return value.slice(0, 500)+ '...';
});

let router = new VueRouter({
routes: Routes,
mode: 'history',
});
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
