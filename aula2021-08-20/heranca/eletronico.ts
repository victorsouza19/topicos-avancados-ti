import { Produto } from "./produto";

export class Eletronico extends Produto {
    // extends = índica herança, neste ex class eletronico
    // recebe todos os atributos e métodos da classe produto (super classe)
    // que são declarados como protected ou public.

    // Atributos específicos desta classe Eletronico
    private tensao: number;
    private garantia: string;
    
    constructor();
    constructor(codigo: number, descricao: string, preco: number, tensao: number, garantia: string);
    constructor(codigo?: any, descricao?: any, preco?: any, tensao?: any,
      garantia?: any) {
        super (codigo, descricao, preco);
        this.tensao = tensao;
        this.garantia = garantia;
    }

    // getter e setter da classe Eletronico
    public getTensao(): number {
        return this.tensao;
    }
    public setTensao(tensao: number) {
        this.tensao = tensao;
    }

    public getGarantia(): string {
        return this.garantia;
    }
    public setGarantia(garantia: string) {
        this.garantia = garantia;
    }

    public toString(): string {

        return super.toString() +
        
            "\nTensao: " + this.tensao +
            "\nGarantia: " + this.garantia;
    }

}