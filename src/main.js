import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify';
import Meta from "vue-meta";
Vue.use(axios)
Vue.use(Meta)
Vue.config.productionTip = false
new Vue({
 router,
 store,
 axios,
 vuetify,
 render: h => h(App)
}).$mount('#app')
