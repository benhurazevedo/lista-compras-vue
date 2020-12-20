import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    lista: [
         {cod: 1, descricao: "war", checked: false}
        ,{cod: 2, descricao: "war2", checked: false}
    ]
};

const mutations = {
    INCLUIR_ITEM(state, item){
        var posicaoUltimoElemento, ultimoElemento, novoCodigo;

        posicaoUltimoElemento = state.lista.length;
        if(posicaoUltimoElemento != 0)
        {
            posicaoUltimoElemento--;
            ultimoElemento = state.lista[posicaoUltimoElemento];
            novoCodigo = ultimoElemento.cod;
            novoCodigo++;
        }
        else{
            novoCodigo = 1;
        }
        state.lista.push({cod: novoCodigo, descricao: item, checked: false});
    }
    ,EXCLUIR_ITEM(state){
        state.lista = state.lista.filter(item => !item.checked);
    }
};

const getters = {
    getLista: state => state.lista
};

const actions = {
    incluirItem(context, item){
        context.commit('INCLUIR_ITEM', item);
    }
    ,excluirItem(context){
        context.commit('EXCLUIR_ITEM');
    }
}

export default new Vuex.Store({
    state: state
    ,mutations: mutations
    ,getters: getters
    ,actions: actions
});