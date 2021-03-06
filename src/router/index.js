import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import About from '@/components/About';
import Projects from '@/components/Projects';

Vue.use(Router);

const scrollBehavior = () => ({ x: 0, y: 0 });

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Main,
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
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      props: {
        pageTitle: 'Projects',
      },
    },
  ],
})