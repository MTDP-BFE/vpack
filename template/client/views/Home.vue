<template>
    <div class="page">
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import navBar from 'components/nav/Nav';
import * as api from './../api/interface';

export default {
    components: {
        navBar
    },
    created: () => {
        api.getTestData();
    }
}
</script>
