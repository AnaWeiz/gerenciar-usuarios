const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        //1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario('Maria');

        //2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no final da lista de usuários
        expect(listaDeUsuarios.at(-1)).to.equal('Maria'); //Espero que o ultimo item da lista seja igual a 'Maria'
    });
});
