<template>
    <div id="lista">
      <ul>
        <item-lista v-for="item in getLista" :key="item.cod" :item="item"></item-lista>
      </ul>
      <app-footer></app-footer>
    </div>
</template>
<script>
import itemLista from './itemLista.vue'
import AppFooter from './AppFooter.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        itemLista
        ,AppFooter
  },computed:{
      ...mapGetters(['getLista'])
  },methods:{
    ...mapActions(['recuperarLista'])
  },mounted(){
    this.recuperarLista();
  }
}
</script>
<style scoped>
ul{
  list-style: none;
}
</style>