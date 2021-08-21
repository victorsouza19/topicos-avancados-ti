// ônibus:  quantidade  de  passageiros,  número  de eixos;

import { Veiculo } from "./veiculo";

export class Onibus extends Veiculo{

    private qtdPassageiros: number;
    private numEixos: number;

    
    constructor();
    constructor(chassi: string, placa: string, fabricante: string, modelo: string, ano: number, cor: string, qtdPassageiros: number, numEixos: number);
    constructor(chassi?: any, placa?: any, fabricante?: any, modelo?: any, ano?: any, cor?: any, qtdPassageiros?: any, numEixos?: any) {
        super(chassi, placa, fabricante, modelo, ano, cor),
        this.qtdPassageiros = qtdPassageiros,
        this.numEixos = numEixos;

    }

    public getQtdPassageiros(): number {
        return this.qtdPassageiros;
    }
    public setQtdPassageiros(qtdPassageiros: number) {
        this.qtdPassageiros = qtdPassageiros;
    }

    public getNumEixos(): number {
        return this.numEixos;
    }
    public setNumEixos(numEixos: number) {
        this.numEixos = numEixos;
    }


    public toString(): string {

        return super.toString() +
            "\nQuantidade de Passageiros: " + this.qtdPassageiros + 
            "\nNúmero de Eixos: " + this.numEixos;
    }

}