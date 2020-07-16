<template>
<ul>
    <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
</ul>
</template>

<script>
export default {
    data(){
        return{
            details:['80% cotton', '20% polyester', 'Gender-neutral']
        }
    },
}
</script>

<style>

</style>