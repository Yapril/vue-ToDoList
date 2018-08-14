<template>
    <div class="deadline-wrap">
        <div class="add-btn"><router-link to="add"></router-link></div>
        <div class="dl-remain"></div>
        <div class="dl-today">{{date}}</div>
    </div>
</template>

<style lang="scss">
@import '../assets/css/_sprite.scss';
.deadline-wrap {
    position: relative;
    width: 750px;
    height: 660px;
    text-align: center;
    background-color: #eee;
}

.add-btn {
    @include sprite($add);
    position: absolute;
    top: 0;
    right: 0;
}

.dl-today {
    font-size: 36px;
    line-height: 660px;
}
</style>

<script>
const curDate = new Date()
let today = curDate.getFullYear() + '-' + (curDate.getMonth()+1) + '-' + curDate.getDate()
export default {
    data() {
        return {
            date: today
        } 
    }
}
</script>

