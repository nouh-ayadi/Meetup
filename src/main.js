import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAqciI1dQTlPw_UcOc4GZaWcXJsrpEjcWA',
      authDomain: 'siteweb-37a0b.firebaseapp.com',
      databaseURL: 'https://siteweb-37a0b.firebaseio.com',
      projectId: 'siteweb-37a0b',
      storageBucket: 'siteweb-37a0b.appspot.com'
    })
  }
})
