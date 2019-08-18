import '@fortawesome/fontawesome-free/css/all.css';
import './stylus/main.styl';

import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';

import router from './router';

Vue.config.productionTip = false;

require('./stylus/main.styl');

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');

Vue.use(VueAnalytics, {
  id: 'UA-145888637-1'
});
