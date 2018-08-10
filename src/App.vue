<template>
    <div id="app">
        <deadline></deadline>
        <todo-list></todo-list>
    </div>
</template>

<style lang="scss">
@import './assets/css/lib';
</style>


<script>
import Deadline from './components/Deadline.vue'
import TodoList from './components/TodoList.vue'
export default {
    name: 'App',
    components: { Deadline, TodoList }
}
</script>

