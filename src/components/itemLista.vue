<template>
    <li><label><input type="checkbox"  v-model="item.checked"> {{ item.descricao }}</label></li>
</template>
<script>
export default {
    props:['item']
}
</script>
<style scoped>

</style>