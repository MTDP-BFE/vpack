import { ActionContext, ActionTree } from 'vuex';
import * as types from '../../mutation-type';
{{#api}}
import * as Api from '../../../api';
{{/api}}

// export interface
const actions: ActionTree<StoreState.Counter, any> = {
    {{#api}}
    getTodayWeather: ({ commit }, payload: StoreAction.GetTodayWeatherParam) => {
        return new Promise((resolve, reject) => {
            Api.getCityWeather(payload).then(res => {
                commit(types.GET_TODAY_WEATHER, {
                    res
                });
                resolve(res.data);
            });
        });
    },
    {{/api}}
    handleByNum: ({ commit }, payload: StoreAction.HandleNumParam) => {
        commit(types.HANDLE_BY_NUM, payload.count);
    }
};

export default actions;
