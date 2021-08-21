// carros esportes:  potência,  capacidade  de  aceleração;

import { Veiculo } from "./veiculo";

export class Esportivo extends Veiculo{

    private potencia: number;
    private capAceleracao: number;

    
    constructor();
    constructor(chassi: string, placa: string, fabricante: string, modelo: string, ano: number, cor: string, potencia: number, capAceleracao: number);
    constructor(chassi?: any, placa?: any, fabricante?: any, modelo?: any, ano?: any, cor?: any, potencia?: any, capAceleracao?: any) {
        super(chassi, placa, fabricante, modelo, ano, cor),
        this.potencia = potencia,
        this.capAceleracao = capAceleracao;

    }

    public getPotencia(): number {
        return this.potencia;
    }
    public setPotencia(potencia: number) {
        this.potencia = potencia;
    }

    public getCapAceleracao(): number {
        return this.capAceleracao;
    }
    public setCapAceleracao(capAceleracao: number) {
        this.capAceleracao = capAceleracao;
    }


    public toString(): string {

        return super.toString() +
            "\nPotência: " + this.potencia + "cv" +
            "\nCapacidade de Aceleração: " + this.capAceleracao + "Km/h";
    }

}