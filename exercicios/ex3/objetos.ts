import { Efetivo } from "./efetivo";
import { Temporario } from "./temporario";
import { Terceirizado } from "./terceirizado";

console.log("\n------------\n");

let efetivo1: Efetivo = new Efetivo(250, 'Vanessa Alessandra Vitória Silva', 'Professor(a)', 4999.80, 'Ativo', '01/07/2003', 'Até o momento');
console.log("Efetivo: \n" + efetivo1.toString());

console.log("\n------------\n");

let temporario1: Temporario = new Temporario(727, 'Aurora Sueli Rodrigues', 'Coordenador(a)', 1350.12, 'Inativo', '02/2019', 24);
console.log("Temporário: \n" + temporario1.toString());

console.log("\n------------\n");

let terceiro1: Terceirizado = new Terceirizado(174, 'Francisco Márcio Renato Fernandes', 'Pintor', 2300.00, 'Ativo', '05/2021', 6, 'Fernandes Pinturas');
console.log("Terceirizado: \n" + terceiro1.toString());