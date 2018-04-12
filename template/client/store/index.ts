import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);
const debug: boolean = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    modules: {
        counter
    },
    strict: debug
});

export default store;
