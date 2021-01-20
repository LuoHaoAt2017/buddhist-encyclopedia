import Vue, { CreateElement, VNode } from 'vue';
import router from './route';
import store from './store';
import App from './App.vue';
import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(antd);

const app = new Vue({
  router: router,
  store: store,
  render(h: CreateElement): VNode {
    return h(App);
  }
}).$mount('#app');

export default app;