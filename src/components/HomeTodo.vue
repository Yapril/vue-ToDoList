<template>
    <div class="todo-home">
        <home-date></home-date>
        <home-list></home-list>
    </div>   
</template>


<script>
import HomeDate from '../components/HomeDate.vue'
import HomeList from '../components/HomeList.vue'

export default {
    name: 'HomeTodo',
    components: { HomeDate, HomeList }
}
</script>
