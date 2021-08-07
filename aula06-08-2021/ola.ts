// Criando variáveis 

    let nome: string = 'Cláudio';
    let idade: number = 50;
    let descricao: string = 'Geladeira';
    let preco: number = 2000.90;
    let disponivel: boolean = true;
    let garantia: any = 12;

/////////////////////////////////////////////////////

// Imprimindo as variáveis concatenadas com textos

    console.log('Olá, ' + nome + '! Sua idade é ' + idade);
    console.log('Item: ' + descricao);
    console.log('Preço: R$' + preco);
    console.log('Disponibilidade: ' + disponivel);
    console.log('Garantia de: ' + garantia)

// Alterando a variável any(que aceita todo tipo de variável)

    garantia = '12 meses';
    console.log(garantia);

// Criando um array

    let historicoPreco: number[] = [1990.00, 2100.00, 2050.00, 1990.00, 2200.00];

// Imprimindo o array

    console.log('Histórico de preços: ');
    // o for vai percorrer todo o array e imprimir o valor de cada uma das posições
    for (let i in historicoPreco) {
        console.log(historicoPreco[i]);
    }
    
    
// Consultando o número de posições do vetor com a propriedade length

    console.log('Preços registrados: ');
    let posicao: number = historicoPreco.length;
    console.log(posicao);


// Trazendo a última posição do array
    
    console.log('Ultima posição registrada: ');
    // armazenando a última posição em uma variável
    let lastPosition: number = historicoPreco.length -1;
    // utilizando o valor armazenado para filtrar a posição
    console.log(historicoPreco[lastPosition]);

