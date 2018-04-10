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
    }
}

