import { ActionContext, ActionTree } from 'vuex';
import * as types from '../../mutation-type';
import * as Api from '../../../api';


// 既要支持传单值变量，也要支持传对象，还要支持传多参数


// export interface
const actions: ActionTree<StoreState.Counter, any> = {
    handleByNum: ({ commit }, payload: StoreAction.HandleNumParam) => {
        commit(types.HANDLE_BY_NUM, payload.count);
    },
    getTodayWeather: ({ commit }, city: string) => {
        Api.getCityWeather({ city }).then(res => {
            commit(types.GET_TODAY_WEATHER, {
                res
            });
        });
    }
};

export default actions;
