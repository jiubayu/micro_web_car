import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false

// let instance = null;
const render = () => {
  // instance =
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app-vue')
}
// if (!window.__POWERED_BY_QIANKUN__) {
//   instance = new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount('#app-vue')
// }
if (!window.singleSpaNavigate) {
  render();
}

const lifeCycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
  }
})
// export async function bootstrap() {
//   console.log('vue app bootstraped');
// }
// export async function mount() {
//   window.customEvent.emit('test1')
//   window.customEvent.on('test2', (data) => {
//     console.log('from vue3', data);
//   })
//   console.log('加载成功')
//   instance = new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount('#app-vue')
// }
// export async function unmount(ctx) {
//   console.log('卸载成功', ctx);
//   instance = null;
//   // const { container } = ctx
//   // if (container) {
//   //   document.querySelector(container).innerHTML = ''
//   // }
// }

export const bootstrap = lifeCycles.bootstrap;
export const mount = lifeCycles.mount;
export const unmount = lifeCycles.unmount;
