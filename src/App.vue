<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
@import './assets/css/lib';
</style>

<script>
import navbar from './components/nav.vue'
export default {
    name: 'App',
    components: {navbar}
}
</script>

