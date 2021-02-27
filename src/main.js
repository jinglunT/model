import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { rtdbPlugin } from 'vuefire'
import vueHeadful from 'vue-headful'
Vue.component('vue-headful', vueHeadful)

import ImageUploader from 'vue-image-upload-resize'
Vue.use(ImageUploader)

Vue.config.productionTip = false
Vue.use(rtdbPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
