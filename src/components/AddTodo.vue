<template>
    <div class="todo-add">
        <div class="add-header">
            <div class="back-btn"><router-link to="home"></router-link></div>
            <h1>添加任务</h1>
        </div> 
        <div class="add-item">
            <h2>任务标题</h2>
            <input type="text" id="dotitle" v-model="newtitle">
        </div>
        <div class="add-item">
            <h2>任务内容</h2>
            <input type="text" id="dodetail" v-model="newdetail">
        </div>
        <!-- <div class="add-item">
            <h2>几天完成</h2>
            <input type="text">
        </div> -->
        <button @click="addItem()">提交</button>
    </div>
</template>

<style lang="scss">
@import '../assets/css/_sprite.scss';
.todo-add {
    position: absolute;
    background: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    h1 {
        font-size: 40px;
        text-align: center;
        line-height: 50px;
    }
}

.add-item {
    > h2 {
        font-size: 36px;
        line-height: 60px;
    }

    > input {
        font-size: 24px;
        padding: 20px;
    }
}

.back-btn {
    @include sprite($back);
}
</style>

<script>
import Store from '../store'
import 'regenerator-runtime/runtime';
export default {
    data() {
        return {
            items: Store.fetch(),
            newtitle: this.$route.query.title || '',
            newdetail: this.$route.query.detail || '',
        } 
    },
    methods: {
        addItem () {
            if (this.$route.query.id > -1) {
                this.items[this.$route.query.id].title = this.newtitle;
                this.items[this.$route.query.id].detail = this.newdetail;
            } else {
                this.items.push({
                    title: this.newtitle,
                    detail: this.newdetail
                });
            } 
            if (this.newtitle === '' || this.newdetail === '') {
                alert('写点东西嘛~~');
            } else{
                this.newtitle = '';
                this.newdetail = '';
            }
        }
    },
    watch: {
        items: {
            handler (items) {
                Store.save(items);
                this.$router.push('home');
            },
            deep: true
        }
    }
}
</script>


