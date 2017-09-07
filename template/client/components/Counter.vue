<template>
    <div class="counter-wrapper">
        {{#if_not bfui}}
        <div class="counter">
            \{{ counter.count }}
        </div>
        <button @click="handleByNum('plus')">Increment</button>
        <button @click="handleByNum('minus')">Decrement</button>
        {{/if_not}}
        {{#bfui}}
        <el-input-number class="counter" v-model="counter.count" @change="handleByNum" :min="1" :max="10"></el-input-number>
        {{/bfui}}
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    {{#if_not bfui}}
    computed: {
        ...mapState([
            'counter'
        ])
    },
    methods: {
        handleByNum: function(type) {
            let v;
            if (type === 'plus') {
                v = this.counter.count + 1;
            } else {
                v = this.counter.count - 1;
            }
            this.$store.dispatch('handleByNum', v);
        }
    }
    {{/if_not}}
    {{#bfui}}
    computed: {
        ...mapState([
            'counter'
        ])
    },
    methods: {
        handleByNum: function(v) {
            this.$store.dispatch('handleByNum', v);
        }
    }
    {{/bfui}}
};
</script>

<style>
.counter {
    {{#if_not bfui}}
    height: 200px;
    margin: 100px auto;
    line-height: 200px;
    font-size: 5rem;
    {{/if_not}}
    {{#bfui}}
    margin: 200px auto 50px;
    {{/bfui}}
    border-radius: 3px;
    width: 200px;
    text-align: center;
    background-color: #f0f0f0;
    user-select: none;
}
</style>
