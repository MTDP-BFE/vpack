<template>
    <div class="page">
        <counter></counter>
        <p>To get started, edit files in <code>./client</code> and save.</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Counter from '../components/Counter.vue';
{{#api}}
import * as api from './../api/';
{{/api}}

@Component({
    components: {
        Counter
    }
})
export default class Home extends Vue {
    {{#api}}
    created () {
        api.getCityWeather({ city: encodeURIComponent('北京') }).then(res => {
            console.log(res);
        });
    }
    {{/api}}
}
</script>
