<template>
    <div class="counter-wrapper">
        {{#if_not useUI}}
        <div class="counter">
            \{{ counter.count }}
        </div>
        <button @click="handleByNum('plus')">Increment</button>
        <button @click="handleByNum('minus')">Decrement</button>
        {{/if_not}}
        {{#useUI}}
        <el-input-number class="counter" v-model="counter.count" @change="handleByNum" :min="1" :max="10"></el-input-number>
        {{/useUI}}
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, State, namespace } from 'vuex-class';
import { ActionContext, Store } from 'vuex';

@Component
export default class Counter extends Vue {
    @State(state => state.counter) counter: StoreState.Counter;
    @Action('handleByNum') handleByNumAction: StoreAction.HandleByNumAction;

    handleByNum (type: string): void {
        let count: number;
        if (type === 'plus') {
            count = this.counter.count + 1;
        } else {
            count = this.counter.count - 1;
        }
        this.handleByNumAction({ count });
    }
}
</script>

<style>
.counter {
    {{#if_not useUI}}
    height: 200px;
    margin: 100px auto;
    line-height: 200px;
    font-size: 5rem;
    {{/if_not}}
    {{#useUI}}
    margin: 200px auto 50px;
    {{/useUI}}
    border-radius: 3px;
    width: 200px;
    text-align: center;
    background-color: #f0f0f0;
    user-select: none;
}
</style>
