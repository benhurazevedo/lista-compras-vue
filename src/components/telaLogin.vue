<template>
    <div>
        <label for="usuario">Usuário:&nbsp;</label><input type="text" id="usuario" v-model="usuario"><br>
        <label for="senha">Senha:&nbsp;</label><input type="password" id="senha" v-model="senha"><br>
        <button type="button" :disabled="loginPreenchido" @click="efetuarLogin">Logar</button>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data(){
        return{
            usuario: ""
            ,senha: ""
        }
    }
    ,methods:{
        ...mapActions(['logar'])
        ,efetuarLogin: function()
        {
            this.logar({
                'usuario': this.usuario
                ,'senha': this.senha
            });
        }
    },computed:{
        loginPreenchido: function()
        {
            return this.usuario.length == 0 || this.senha.length == 0;
        },
        ...mapGetters(['getStatusAutenticado'])
    },watch:{
        getStatusAutenticado(val)
        {
            if(val)
            {
                this.$router.replace('/lista');
            }
        }
    }
}
</script>
<style scoped>

label{
    font-weight: bolder;
}

input{
    width: 4cm;
}

.coluna{
    width: 33.33%;
    display: inline-block;
}

.coluna button {
    width: 100%;
}
</style>