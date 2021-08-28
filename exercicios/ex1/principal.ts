import {Eletronico} from "./eletronico";
import {Livro} from "./livro";
import { Dvd } from "./dvd";

console.log("\n------------\n");

// OBJETOS CLASSE ELETRÔNICO
    let televisao: Eletronico = new Eletronico();
    televisao.setCodigo(11);
    televisao.setDescricao('Televisão 32 Polegadas');
    televisao.setPreco(1998.90);
    televisao.setTensao(110);
    televisao.setGarantia('24 meses');
    console.log(televisao.toString());

    let elet1: Eletronico = new Eletronico(12, 'Computador', 2999.59, 127, '12 meses' );
    console.log("\n\n" + elet1.toString());


console.log("\n------------\n");

// OBJETO CLASSE LIVRO
    let livro1: Livro = new Livro(13, 'Harry Potter e o Cálice de Fogo', 29.99, 'J. K. Rowling', 432, 'Português-BR');
    console.log("\n" + livro1.toString());


console.log("\n------------\n");

// OBJETO CLASSE DVD
    let dvd1: Dvd = new Dvd(14,'Curso de Typescript Completo', 199.90, '6hr30min', 'Brasil', 'Português', 'inglês');
    console.log("\n" + dvd1.toString());