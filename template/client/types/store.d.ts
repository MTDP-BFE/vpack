declare namespace StoreState {
    export interface Counter {
        count: number
    }
}

declare namespace StoreAction {
    export interface HandleNumParam {
        count: number
    }
    export interface HandleByNumAction {
        (count: HandleNumParam): void;
    }{{#api}}
    
    export interface GetTodayWeatherParam {
        city: string
    }
    export interface GetTodayWeatherAction {
        (payload: GetTodayWeatherParam): Promise<Ajax.AjaxResponse>;
    }
    {{/api}}
}

