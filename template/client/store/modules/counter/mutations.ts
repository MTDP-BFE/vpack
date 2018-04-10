import { MutationTree } from 'vuex';
import * as types from '../../mutation-type';

/**
 * 设置当前数值
 * @param {Object} state
 * @param {Object} count
 */
const mutations: MutationTree<StoreState.Counter> = {
    [types.HANDLE_BY_NUM] (state, count: number) {
        state.count = count;
    },
    [types.GET_TODAY_WEATHER] (state, payload: any) {
        console.log(payload);
    }
};

export default mutations;
