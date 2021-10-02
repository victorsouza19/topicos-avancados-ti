import { IProduto } from "./produto";

interface IListaProduto extends Array<IProduto> {
  [chave: number]: IProduto;
}

// passando como string
//  let prod: IListaProduto = JSON.parse(`[
//   { "codigo": 20, "descricao": "Computador", "preco": 4199.00 },
//   { "codigo": 21, "descricao": "Rádio", "preco": 80.00 },
//   { "codigo": 22, "descricao": "Fogão", "preco": 599.00 }
// ]`) 


// passando como JSON direto
let prod: IListaProduto = [
  { codigo: 20, descricao: "Computador", preco: 4199.00 },
  { codigo: 21, descricao: "Rádio", preco: 80.00 },
  { codigo: 22, descricao: "Fogão", preco: 599.00 }
];

// Inserção de elementos ao final da coleção
prod.push({ codigo: 23, descricao: "Celular", preco: 999.00 })

// Exclusão de elementos da coleção
// prod.splice( posicao, nº de elementos após essa posição)
prod.splice(2, 1);

// Inserção de elementos em qualquer local da coleção
prod.splice(1, 0, { codigo: 24, descricao: "Mesa", preco: 400.00 })


for (let item in prod) {
  console.log(`\n`)
  console.log(`- Código ${prod[item].codigo}`)
  console.log(`- Descrição: ${prod[item].descricao}`)
  console.log(`- Preço: ${prod[item].preco}`)
}


//verificando o produto mais caro
let caro: number = 0.0;
let posCaro: number = 0;

for (let item in prod) {
  if(prod[item].preco > caro) {
    caro = prod[item].preco;
    posCaro = parseInt(item);
  }
}

// imprimindo produto mais caro
console.log(`\nProduto mais caro: ${prod[posCaro].codigo} - ${prod[posCaro].descricao}`);
