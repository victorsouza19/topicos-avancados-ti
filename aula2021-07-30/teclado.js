// Importando um módulo
const readline = require('readline');

// Criando o objeto teclado
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Criando uma função que recebe a entrada do user
teclado.question('Digite o seu nome: ', (resposta) => {
    console.log('Olá ' + resposta);
    teclado.close();

});