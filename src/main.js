import Vue from 'vue'
import App from './App.vue'

import weekSlider from './WeekSlider/'

Vue.use(weekSlider)
new Vue({
  el: '#app',
  render: h => h(App)
})
