import { Produto } from "./produto";

export class Dvd extends Produto{

    private duracao: string;
    private regiao: number;
    private idioma: string;
    private legenda: string;
    
    constructor();
    constructor(codigo: number, descricao: string, preco: number, duracao: string, regiao: string, idioma: string, legenda: string);
    constructor(codigo?: any, descricao?: any, preco?: any, duracao?: any, regiao?: any, idioma?: any, legenda?: any) {
        super (codigo, descricao, preco),
        this.duracao = duracao,
        this.regiao = regiao,
        this.idioma = idioma,
        this.legenda = legenda;
    }

    public getDuracao(): string {
        return this.duracao;
    }
    public setDuracao(duracao: string) {
        this.duracao = duracao;
    }

    public getRegiao(): number {
        return this.regiao;
    }
    public setRegiao(regiao: number) {
        this.regiao = regiao;
    }

    public getIdioma(): string {
        return this.idioma;
    }
    public setIdioma(idioma: string) {
        this.idioma = idioma;
    }

    public getLegenda(): string {
        return this.legenda;
    }
    public setLegenda(legenda: string) {
        this.legenda = legenda;
    }

    public toString(): string {

        return super.toString() +
        
            "\nDuração : " + this.duracao +
            "\nRegião: " + this.regiao +
            "\nIdioma: " + this.idioma +
            "\nLegenda: " + this.legenda;
    }

}