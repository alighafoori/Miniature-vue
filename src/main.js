// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n, { currentLang } from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './core/bootstrap'
import './main.css'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './global.less'
import './rtl.less'

Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
Vue.component('pro-layout', ProLayout)
Vue.component('page-header-wrapper', PageHeaderWrapper)
Vue.filter('formatCurrency', (value) => currentLang.currencyFomatter ? currentLang.currencyFomatter(value) : new Intl.NumberFormat(i18n.locale, { style: 'currency', currency: currentLang.currency, minimumFractionDigits: 0 }).format(value))
new Vue({
  router,
  store,
  i18n,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
