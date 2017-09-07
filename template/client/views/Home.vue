<template>
    <div class="page">
        <counter></counter>
        <p>To get started, edit files in <code>./client</code> and save.</p>
    </div>
</template>

<script>
import Counter from 'components/Counter';
import * as api from './../api/interface';

export default {
    components: {
        Counter
    },
    created: () => {
      {{#api}}
      api.getTestData();
      {{/api}}
    }
}
</script>
