<template>
    <div class="deadline-wrap">
        <div class="add-btn"><router-link to="add">+</router-link></div>
        <div class="dl-remain"></div>
        <div class="dl-today">{{date}}</div>
    </div>
</template>

<style lang="scss">
.deadline-wrap {
    position: relative;
    width: 750px;
    height: 660px;
    text-align: center;
    background-color: #eee;
}

.add-btn {
    width: 30px;
    height: 30px;
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 0;
}

.dl-today {
    font-size: 30px;
    line-height: 300px;
}
</style>

<script>
const curDate = new Date()
let today = curDate.getFullYear() + '-' + curDate.getMonth() + '-' + curDate.getDate()
export default {
    data() {
        return {
            date: today
        } 
    }
}
</script>

