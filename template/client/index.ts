import './promise-polyfill';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './components/App.vue';
import router from './router';
import store from './store';
{{#useUI}}
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
{{/useUI}}
sync(store, router);
// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
    require('./pwa');
}

/* tslint:disable no-unused-expression */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
