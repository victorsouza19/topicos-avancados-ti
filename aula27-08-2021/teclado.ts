import readline from 'readline';

// padrão de input e output de teclado 
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

// exportando a const teclado para ser usada em outros arquivos(função do nodejs)
module.exports = teclado;
