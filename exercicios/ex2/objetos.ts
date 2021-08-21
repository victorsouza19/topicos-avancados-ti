import { Caminhao } from "./caminhao";
import { Esportivo } from "./carroEsporte";
import { Onibus } from "./onibus";
import { OffRoad } from "./offRoad";

console.log("\n------------\n");

let caminhao1: Caminhao = new Caminhao('2G1WG5E35D1196767', 'AOB-1050', 'Volvo', 'FH540', 2018, 'Vermelho', '57000kg', 6);
console.log("Caminhão: \n" + caminhao1.toString());

console.log("\n------------\n");

let esportivo1: Esportivo = new Esportivo('3GYFNAE34CS510198','BMW-1234', 'BMW', 'X5', 2013, 'Branco', 394, 290);
console.log("Esportivo: \n" + esportivo1.toString());

console.log("\n------------\n");

let onibus1: Onibus = new Onibus('5LMPU28A8XLJ92166','XYZ-4075', 'Mercedez Benz', 'MARCOPOLO VIAGGIO R', 2007, 'Azul', 57 , 4);
console.log("Ônibus: \n" + onibus1.toString());

console.log("\n------------\n");

let offRoad1: OffRoad = new OffRoad('WP1AC2A21DLA92116','JYP-8098', 'JEEP', 'Wrangler Rubicon', 2019, 'Marrom', 269, '4x4');
console.log("OffRoad: \n" + offRoad1.toString());