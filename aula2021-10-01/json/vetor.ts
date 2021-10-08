
interface ILista {
    [chave: number]: number;
}

let numero: ILista = JSON.parse('[10, 20, 30, 40, 50 ]')

for (let i in numero){
  console.log(`Chave ${i} : ` + numero[i]);
}