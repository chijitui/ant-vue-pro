// 绝对引入先于相对引入
import Vue from 'vue';
import Antd from 'vue-antd-ui';
import 'vue-antd-ui/dist/antd.css';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
