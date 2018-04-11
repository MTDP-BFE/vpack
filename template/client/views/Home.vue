<template>
    <div class="page">
        <counter></counter>
        <p>To get started, edit files in <code>./client</code> and save.</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
{{#api}}
import { Action } from 'vuex-class';
{{/api}}
import Counter from '../components/Counter.vue';

@Component({
    components: {
        Counter
    }
})
export default class Home extends Vue {
    {{#api}}
    @Action('getTodayWeather') getTodayWeatherAction: StoreAction.GetTodayWeatherAction;
    created () {
        this.getTodayWeatherAction({ city: '北京' }).then((res: Ajax.AjaxResponse) => {
            const { low, high, type } = res.data.forecast[0];
            alert(`北京今日：${type} ${low} - ${high}`);
        });
    }
    {{/api}}
}
</script>
