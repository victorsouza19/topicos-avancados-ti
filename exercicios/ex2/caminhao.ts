// caminhões:  capacidade  de  carga,  número  de  eixos;

import { Veiculo } from "./veiculo";

export class Caminhao extends Veiculo{

    private capacidadeCarga: string;
    private numEixos: number;

    
    constructor();
    constructor(chassi: string, placa: string, fabricante: string, modelo: string, ano: number, cor: string, capacidadeCarga: string, numEixos: number);
    constructor(chassi?: any, placa?: any, fabricante?: any, modelo?: any, ano?: any, cor?: any, capacidadeCarga?: any, numEixos?: any) {
        super(chassi, placa, fabricante, modelo, ano, cor),
        this.capacidadeCarga = capacidadeCarga,
        this.numEixos = numEixos;

    }

    public getCapacidadeCarga(): string {
        return this.capacidadeCarga;
    }
    public setCapacidadeCarga(capacidadeCarga: string) {
        this.capacidadeCarga = capacidadeCarga;
    }

    public getNumEixos(): number {
        return this.numEixos;
    }
    public setNumEixos(numEixos: number) {
        this.numEixos = numEixos;
    }


    public toString(): string {

        return super.toString() +
            "\nCapacidade de carga : " + this.capacidadeCarga +
            "\nNúmero de eixos: " + this.numEixos;
    }

}