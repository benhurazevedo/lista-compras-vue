<template>
    <div>
        <div class="coluna">
            <router-link to="/lista">
                <button type="button">Voltar</button>
            </router-link>
        </div>
        <div class="coluna">
            <input type="text" id="novo-item" v-model="descricaoItem">
        </div>
        <div class="coluna">
            <button type="button" :disabled="descricaoItemPreenchida" @click="incluir">Incluir</button>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data(){
        return{
            descricaoItem:""
        }
    }
    ,methods:{
        ...mapActions(['incluirItem'])
        ,incluir: function(){
            this.incluirItem(this.descricaoItem);
        }
    },computed:{
        descricaoItemPreenchida: function(){
            return this.descricaoItem.length == 0;
        }
        ,...mapGetters(['getStatusItemIncluido'])
    },watch:{
        getStatusItemIncluido(val)
        {
            if(val)
            {
                this.descricaoItem = "";
                this.$router.replace('/lista');
            }
        }
    }
}
</script>
<style scoped>
.coluna{
    width: 33.33%;
    display: inline-block;
}

.coluna button, input {
    width: 100%;
}
</style>