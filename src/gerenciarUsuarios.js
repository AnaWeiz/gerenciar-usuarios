const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João'];

function retornarUsuarios() { //retorna uma lista de nomes gravados na lista de nomes de usuários
    return usuarios;
}

function adicionarNovoUsuario(nome) { //adiciona um novo nome de usuário ao final da lista de usuários
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}