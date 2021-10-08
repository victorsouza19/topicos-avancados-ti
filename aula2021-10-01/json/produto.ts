
export interface IProduto {
  codigo: number;
  descricao: string;
  preco: number;
}

let produto: IProduto = JSON.parse(`{
  "codigo": 10,
  "descricao": "Televisão",
  "preco":  1990
}`)

// retornando o JSON do produto
console.log(produto);


// utilizando template strings
  console.log(`Código: ${produto.codigo}`)
  console.log(`Descrição: ${produto.descricao}`)
// concatenando 
  console.log('Preço: ' + produto.preco)



console.log("\nTransmitindo os atributos de forma direta:")

let produto2: IProduto = {codigo: 11, descricao: "Geladeira", preco: 2399.00};


// retornando o JSON do produto2
console.log(produto2);


// utilizando template strings
  console.log(`Código: ${produto2.codigo}`)
  console.log(`Descrição: ${produto2.descricao}`)
// concatenando 
  console.log('Preço: ' + produto2.preco)


