import { MutationTree } from 'vuex';
import * as types from '../../mutation-type';

const mutations: MutationTree<StoreState.Counter> = {
    {{#api}}
    [types.GET_TODAY_WEATHER] (state, payload: any) {
        console.log(payload);
    },
    {{/api}}
    [types.HANDLE_BY_NUM] (state, count: number) {
        state.count = count;
    }
    
};

export default mutations;
