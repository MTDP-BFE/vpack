import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './components/App.vue';
import router from './router';
import store from './store';
{{#bfui}}
import bfui from 'bfui';
import 'bfui/lib/theme-default/index.css';
{{/bfui}}
import './promise-polyfill';
{{#bfui}}
Vue.use(bfui);
{{/bfui}}
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
