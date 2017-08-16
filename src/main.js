// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import rap_proxy from "rap-global-proxy";
// import mintUI from 'mint-ui'
// Vue.use(mintUI);


Vue.config.productionTip = false
rap_proxy.doProxy('//rapapi.org/mockjs/', 21616);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})