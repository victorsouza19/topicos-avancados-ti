// importando a const do arquivo teclado.ts
const teclado = require('./teclado');

// criando os inputs para o usuário
teclado.question('Digite o valor um: ', (valor1: string) => {
    teclado.question('Digite o valor dois: ', (valor2: string) => {
        teclado.question('Digite o valor três: ', (valor3: string) => {
            teclado.question('Digite o valor quatro: ', (valor4: string) => {
                
                // calculando a média
                let media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4)) / 4
                
                // imprimindo a média
                console.log('média: ' + media);

                // finalizando os inputs do teclado
                teclado.close();
            });
        });          
    });
});