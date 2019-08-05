import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#FF7D75',
        secondary: '#A2E0D2',
        accent: '#498ECC',
        background: '#FAFDFF',
      },
    },
  },
});
