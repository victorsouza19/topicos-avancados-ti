// off  road:  altura  em  relação  ao  solo,  tipo  de  tração

// ônibus:  quantidade  de  passageiros,  número  de eixos;

import { Veiculo } from "./veiculo";

export class OffRoad extends Veiculo{

    private alturaSolo: number;
    private tipoTracao: string;

    
    constructor();
    constructor(chassi: string, placa: string, fabricante: string, modelo: string, ano: number, cor: string, alturaSolo: number, tipoTracao: string);
    constructor(chassi?: any, placa?: any, fabricante?: any, modelo?: any, ano?: any, cor?: any, alturaSolo?: any, tipoTracao?: any) {
        super(chassi, placa, fabricante, modelo, ano, cor),
        this.alturaSolo = alturaSolo,
        this.tipoTracao = tipoTracao;

    }

    public getAlturaSolo(): number {
        return this.alturaSolo;
    }
    public setAlturaSolo(alturaSolo: number) {
        this.alturaSolo = alturaSolo;
    }

    public getTipoTracao(): string {
        return this.tipoTracao;
    }
    public setTipoTracao(tipoTracao: string) {
        this.tipoTracao = tipoTracao;
    }


    public toString(): string {

        return super.toString() +
            "\nAltura em relação ao Solo: " + this.alturaSolo + "mm" + 
            "\nTipo de Tração: " + this.tipoTracao;
    }

}