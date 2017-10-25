import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import bfui from 'bfui';
import 'bfui/lib/theme-default/index.css';
import App from './components/App';
import router from './router';
import store from './store';

Vue.use(bfui);
sync(store, router);

const app = new Vue({
    router,
    store,
    ...App
});

export { app, router, store };
