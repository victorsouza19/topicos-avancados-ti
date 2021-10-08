import { Produto } from "./produto";

export class Livro extends Produto{

    private autor: string;
    private numPaginas: number;
    private idioma: string;
    
    constructor();
    constructor(codigo: number, descricao: string, preco: number, autor: string, numPaginas: number, idioma: string);
    constructor(codigo?: any, descricao?: any, preco?: any, autor?: any, numPaginas?: any, idioma?: any) {
        super (codigo, descricao, preco),
        this.autor = autor;
        this.numPaginas = numPaginas;
        this.idioma = idioma;
    }

    public getAutor(): string {
        return this.autor;
    }
    public setAutor(autor: string) {
        this.autor = autor;
    }

    public getNumPaginas(): number {
        return this.numPaginas;
    }
    public setNumPaginas(numPaginas: number) {
        this.numPaginas = numPaginas;
    }

    public getIdioma(): string {
        return this.idioma;
    }
    public setIdioma(idioma: string) {
        this.idioma = idioma;
    }

    public toString(): string {

        return super.toString() +
        
            "\nautor: " + this.autor +
            "\nNúmero de Paginas: " + this.numPaginas +
            "\nIdioma: " + this.idioma;
    }

}