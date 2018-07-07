// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/header'
import Footer from './components/footer'
import './assets/css/main.css?ver=0.0.5'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/* eslint-disable no-new */
new Vue({
  el: '#header',
  router,
  components: { Header },
  template: '<Header/>'
})

/* eslint-disable no-new */
new Vue({
  el: '#footer',
  router,
  components: { Footer },
  template: '<Footer/>'
})
