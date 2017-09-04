<template>
    <div class="counter-wrapper">
        {{#if_not bfui}}
        <div class="counter">
            \{{ count }}
        </div>
        <button @click="$store.commit('INCREMENT')">Increment</button>
        <button @click="$store.commit('DECREMENT')">Decrement</button>
        <button @click="$store.dispatch('incrementAsync')">Increment Async</button>
        {{/if_not}}
        {{#bfui}}
        <el-input-number class="counter" v-model="number" @change="handleByNum" :min="1" :max="10"></el-input-number>
        {{/bfui}}
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    {{#if_not bfui}}
    computed: {
        ...mapState({
            counter(counter){
                return counter;
            }
        })
        // count() {
        //     return this.$store.state.count;
        // }
    }
    {{/if_not}}
    {{#bfui}}
    computed: {
        ...mapState({
            count(counter){
                return counter.count;
            }
        })
    },
    data() {
        return {
            number: this.count
        };
    },
    methods: {
        handleByNum: function(){
            this.$store.dispatch('handleByNum', v);
        }
    }
    {{/bfui}}
}
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
