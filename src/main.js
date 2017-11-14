import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import DateFilter from './filters/date'
import alertCmp from './components/Shared/alert.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', alertCmp)

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
