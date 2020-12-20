<template>
    <div id="footer">
        <div class="botao">
            <button type="button" id="excluir" :disabled="temItemExcluir" @click="excluirItem">Apagar</button>
        </div>
        <div class="botao">
          <router-link to="/incluir">
            <button type="button">Incluir item</button>
          </router-link>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    computed:{
        ...mapGetters(['getLista'])
        ,temItemExcluir: function() {
            return this.getLista.filter(item => item.checked).length ==0;
        }
    }
    ,methods:{
        ...mapActions(['excluirItem'])
    }
}
</script>
<style scoped>
.botao{
  width:50%;
  display: inline-block;
}

.botao button{
  width:100%;
}
</style>