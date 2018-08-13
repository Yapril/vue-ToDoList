<template>
    <div class="todo">
        <ul class="td-list">
            <li v-for="(item, index) in items">
                <span>{{item.title}}</span>
                <button @click="delItem(index)">删除</button>
                <!-- <a :href="'/add?id='+index+'&title='+item.title+'&detail='+item.detail">修改</a> -->
                <button><router-link :to="{ name: 'AddTodo',params: '/add',query: {id: index, title: item.title, detail: item.detail}}">修改</router-link></button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.todo {
    padding: 0 20px;
    display: flex;
}
.td-list {
    width: 100%;
    
    li {
        width: 100%;
        line-height: 112px;
        font-size: 34px;
        height: 112px;
        border-bottom: 1px solid #eee;
    }
}
</style>

<script>
import Store from '../store'
export default {
    data() {
        return {
            items: Store.fetch() || []
        }
    },
    watch: {
        items: {
            handler (items) {
                Store.save(items)
            },
            deep: true
        }
    },
    methods: {
        delItem(index) {
            this.items.splice(index, 1);    
        }
    }
}
</script>


