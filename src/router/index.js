import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import About from '@/components/About';

Vue.use(Router);

const scrollBehavior = () => ({ x: 0, y: 0 });

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld,
      props: {
        pageTitle: 'Home',
      },
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      props: {
        pageTitle: 'About',
      },
    },
  ],
})