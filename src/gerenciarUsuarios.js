//Com essa lista, montar um objeto com os nomes + emails
//const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João'];

const usuarios = [
    {
        nome: 'Matheus',
        email: 'matheus@gmail.com'
    },
    {
        nome: 'Marcos',
        email: 'marcos@gmail.com'
    },
    {
        nome: 'Lucas',
        email: 'lucas@gmail.com'
    },
    {
        nome: 'João',
        email: 'joao@gmail.com'
    }
];

function retornarUsuarios() { //retorna uma lista de nomes + emails gravados na lista de usuários
    return usuarios;
}

function adicionarNovoUsuario(usuario) { //adiciona um novo usuário (nome + email) ao final da lista de usuários
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}