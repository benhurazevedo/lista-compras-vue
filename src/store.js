import Vue from 'vue'
import Vuex from 'vuex'
import http from './services/http.js'

Vue.use(Vuex)

const state = {
    lista: []
    ,usuario:   null
    ,senha:     null
    ,autenticado: false
    ,itemApagado: false
    ,itemIncluido: false
};

const mutations = {
    INCLUIR_ITEM(state)
    {
        //state.lista.push(item);
        state.itemIncluido = true;
    }
    ,NAO_HA_ITEM_INCLUIDO(state)
    {
        state.itemIncluido = false;
    }
    ,EXCLUIR_ITEM(state)
    {
        //state.lista = state.lista.filter(item => !item.checked);
        state.itemApagado = true;
    }
    ,LISTAR_ITENS(state, items)
    {
        state.lista = items;
    }
    ,INFORMAR_DADOS_LOGIN(state, objData)
    {
        state.usuario = objData.usuario;
        state.senha = objData.senha;
        state.autenticado = true;
    }
    ,NAO_HA_ITEMS_APAGADOS(state)
    {
        state.itemApagado = false;
    }
};

const getters = {
    getLista: state => state.lista
    ,getStatusAutenticado: state => state.autenticado
    ,getStatusItemApagado: state => state.itemApagado
    ,getStatusItemIncluido: state => state.itemIncluido
};

const actions = {
    incluirItem(context, item)
    {
        context.commit('NAO_HA_ITEM_INCLUIDO');
        http.include(
            {
                'usuario': state.usuario, 
                'senha': state.senha
            }
            ,context
            ,{
                descricao: item
                }
            )
    }
    ,excluirItem(context)
    {
        context.commit('NAO_HA_ITEMS_APAGADOS');
        var itensAApagar = context.state.lista.filter(item => item.checked);
        if(itensAApagar.length > 1)
        {
            alert("Selecione um só item. Não pode apagar mais de um item por vez.");
            return;
        }
        for(var cont = 0; cont < itensAApagar.length; cont++)
        {
            http.delete(
                itensAApagar[cont].cod
                , {'usuario': state.usuario, 'senha': state.senha}
                , context
                );
        }
    }
    ,recuperarLista(context)
    {
        http.list(
            {'usuario': state.usuario, 'senha': state.senha}
            , context
            )
    }
    ,logar(context, objData)
    {
        http.logar(context, objData);
    }
}

export default new Vuex.Store({
    state: state
    ,mutations: mutations
    ,getters: getters
    ,actions: actions
});