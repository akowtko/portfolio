import '@fortawesome/fontawesome-free/css/all.css';
import './stylus/main.styl';

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';

import router from './router';

Vue.config.productionTip = false;

require('./stylus/main.styl');

new Vue({
  vuetify,
  router,
  theme: {
    primary: '#5BB1FF', // Want this to be dark blue instead
    accent: '#FF7D75',
    secondary: '#2E73B3',
    terciary: '#A2E0D2',
    info: '#03A9F4',
    warning: '#FFB300',
    error: '#F44336',
    success: '#00C853',
    background: '#FAFDFF',
  },
  render: h => h(App)
}).$mount('#app');
