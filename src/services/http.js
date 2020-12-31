import axios from 'axios'

export default  {
    delete: function(codItem, objAuth, context)
    {
        var url = 'http://benhurazevedo.ddns.net/lista/' + codItem;

        axios 
        .request({
            url:        url
            ,method:    'delete'
            ,headers: objAuth
        })
        .then(function () {context.commit('EXCLUIR_ITEM')})
        .catch(function() { context.commit('MUDAR_MENSAGEM_APLICATIVO', "Falha ao tentar excluir o item da lista!"); })
    }
    ,list: function(objAuth, context)
    {
        axios
        .request({
            url:        'http://benhurazevedo.ddns.net/lista'
            ,method:    'get'
            ,headers: objAuth
        })
        .then(response => (context.commit('LISTAR_ITENS',response.data)))
        .catch(function() { context.commit('MUDAR_MENSAGEM_APLICATIVO', "Falha ao tentar recuperar a lista!"); });
    }
    ,include: function(objAuth, context, data)
    {
        axios
        .request({
            url:        'http://benhurazevedo.ddns.net/lista'
            ,method:    'post'
            ,headers: objAuth
            ,data: data
        })
        .then(function(){ context.commit('INCLUIR_ITEM') })
        .catch(function() { context.commit('MUDAR_MENSAGEM_APLICATIVO', "Falha ao tentar incluir item na lista!"); });
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
        .catch(function() { context.commit('MUDAR_MENSAGEM_APLICATIVO', "Falha ao tentar efetuar logon!"); });
    }
}