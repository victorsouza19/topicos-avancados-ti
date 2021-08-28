import readline from 'readline';

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

teclado.question('Digite o número um: ', (valor1: string) => {

    teclado.question('Digite o número dois: ', (valor2: string) => {
        
        let soma = parseFloat(valor1) + parseFloat(valor2)
        console.log('Soma: ' + soma);

        teclado.close();
    });
});