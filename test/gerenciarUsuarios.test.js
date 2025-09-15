const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        //1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario({
            nome: 'Maria',
            email: 'maria@gmail.com'
        });

        //2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no final da lista de usuários
        //expect(listaDeUsuarios.at(-1).nome).to.equal('Maria'); //Espero que o ultimo nome da lista seja igual a 'Maria'
        //expect(listaDeUsuarios.at(-1).email).to.equal('maria@gmail.com'); //Espero que o ultimo email da lista seja igual a 'maria@gmail.com'
        expect(listaDeUsuarios.at(-1)).to.eql({ //Valida todas as propriedes (antes era 1 por 1)
            //.to.eql é igual a deep.equal (serve para comparar objeto todo) / .to.equal (serve para comparar item avulso)
            nome: 'Maria',
            email: 'maria@gmail.com'
        });
    });
});