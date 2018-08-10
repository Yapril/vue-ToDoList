<template>
    <div>
        <h2>{{msg}}</h2>
        <p>About Me<span>123</span></p>
    </div>
</template>

<style lang="scss">
h2 {
    font-size: 40px;
}

p {
    span {
        color: red;
    }
}
</style>

<script>
export default {
    data() {
        return {
            msg: 'About'
        }
    }
}
</script>

