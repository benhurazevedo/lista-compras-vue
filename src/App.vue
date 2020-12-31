<template>
  <div id="app">
    <titulo></titulo>
    <router-view></router-view>
    <div class="popup" v-show="getMostrarMensagemAplicativo">
      <div class="area-externa-popup">
        <div class="corpoPopup">
          <div class="cabecalhoPopup">
            <h3>Mensagem do Aplicativo</h3>
          </div>
          <div class="areaMensagemPopup">
            <p>{{ getMensagemAplicativo }}</p>
          </div>
          <div class="rodaPePopup">
            <p><button type="button" @click="toggleMensagemAplicativo">Ok</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titulo from './components/titulo.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    titulo
  }
  ,computed:{
    ...mapGetters(['getMostrarMensagemAplicativo', 'getMensagemAplicativo'])
  }
  ,methods:{
    ...mapActions(['toggleMensagemAplicativo'])
  }
}
</script>

<style>
#app ,
    TelaInclusaoItem{
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 45%;
}

.popup{
  background-color: rgba(5,5,5, 0.2);
  width: 45%;
  height: 100vh;
  position: absolute;
  top:0;
  left: 0;
}

.area-externa-popup{
    display: flex;

    align-items: center;

    justify-content: center;

    height: 100vh;

    flex-direction: column;
}

.corpoPopup{
  width: 40%;
  border: 3px solid black;
  box-shadow: 10px 5px 5px black;
  background-color: white;
}

.cabecalhoPopup, .areaMensagemPopup, .rodaPePopup{
  text-align: center;
}
</style>
