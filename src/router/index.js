import Vue from 'vue';
import Router from 'vue-router';
import main from './main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard/analysis',
    },
    ...main,
  ],
});
