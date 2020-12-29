import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    lista: []
    ,usuario:   null
    ,senha:     null
    ,autenticado: false
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
    ,INFORMAR_DADOS_LOGIN(state, objData)
    {
        state.usuario = objData.usuario;
        state.senha = objData.senha;
        state.autenticado = true;
    }
};

const getters = {
    getLista: state => state.lista
    ,getStatusAutenticado: state => state.autenticado
};

const actions = {
    incluirItem(context, item)
    {
        var codigo;

        axios
        .request({
            url:        'http://benhurazevedo.ddns.net/lista'
            ,method:    'post'
            ,headers: {
                'usuario': state.usuario
                ,'senha': state.senha
            }
            ,data: {
                descricao: item
            }
        })
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
            .request({
                url:        url
                ,method:    'delete'
                ,headers: {
                    'usuario': state.usuario
                    ,'senha': state.senha
                }
            })
            .catch(error => { throw error })
        }
        context.commit('EXCLUIR_ITEM');
    }
    ,recuperarLista(context)
    {
        axios
        .request({
            url:        'http://benhurazevedo.ddns.net/lista'
            ,method:    'get'
            ,headers: {
                'usuario': state.usuario
                ,'senha': state.senha
            }
        })
        .then(response => (context.commit('LISTAR_ITENS',response.data)))
        .catch(error => {alert(error)});
    }
    ,logar(context, objData)
    {
        axios
        .request({
            url:        'http://benhurazevedo.ddns.net/login'
            ,method:    'post'
            ,data: objData 
        })
        .then(function() {
            context.commit('INFORMAR_DADOS_LOGIN', objData);
        })
        .catch(error => { alert(error); });
    }
}

export default new Vuex.Store({
    state: state
    ,mutations: mutations
    ,getters: getters
    ,actions: actions
});