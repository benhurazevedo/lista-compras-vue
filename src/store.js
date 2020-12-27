import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    lista: []
};

const mutations = {
    INCLUIR_ITEM(state, item)
    {
        state.lista.push(item);
    }
    ,EXCLUIR_ITEM(state)
    {
        state.lista = state.lista.filter(item => !item.checked);
    }
    ,LISTAR_ITENS(state, items)
    {
        state.lista = items;
    }
};

const getters = {
    getLista: state => state.lista
};

const actions = {
    incluirItem(context, item)
    {
        var codigo;

        axios
        .post('http://benhurazevedo.ddns.net/lista', {descricao: item})
        .then(response => (codigo = response.data.cod))
        .catch(error => {alert(error)});
        
        var objItemLista = {
            cod: codigo 
            ,descricao: item 
            ,checked: null
        };

        context.commit('INCLUIR_ITEM', objItemLista);
    }
    ,excluirItem(context)
    {
        var itensAApagar = context.state.lista.filter(item => item.checked);
        for(var cont = 0; cont < itensAApagar.length; cont++)
        {
            var url = 'http://benhurazevedo.ddns.net/lista/' + itensAApagar[cont].cod;
            axios
            .delete(url)
            .catch(error =>{alert(error); return;});
        }
        context.commit('EXCLUIR_ITEM');
    }
    ,recuperarLista(context)
    {
        axios
        .get('http://benhurazevedo.ddns.net/lista')
        .then(response => (context.commit('LISTAR_ITENS',response.data)))
        .catch(error => {alert(error)});
    }
}

export default new Vuex.Store({
    state: state
    ,mutations: mutations
    ,getters: getters
    ,actions: actions
});