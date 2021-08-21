//  Os  funcionários  temporários  possuem data  de  início do  contrato  e a  duração  em  meses dele.

import { Funcionario } from "./funcionario";

export class Temporario extends Funcionario{
    private inicioContrato: string;
    private duracao: number;

    constructor();
    constructor(numRegistro: number, nome: string, funcao: string, salario: number, situacao: string, inicioContrato: string, duracao: number);
    constructor(numRegistro?: any, nome?: any, funcao?: any, salario?: any, situacao?: any, inicioContrato?: any, duracao?: any){
        super(numRegistro, nome, funcao, salario, situacao),
        this.inicioContrato = inicioContrato,
        this.duracao = duracao;
    }


    getInicioContrato(): string {
        return this.inicioContrato;
    }
    setInicioContrato(inicioContrato: string) {
        this.inicioContrato = inicioContrato;
    }


    getDuracao(): number {
        return this.duracao;
    }
    setDuracao(duracao: number) {
        this.duracao = duracao;
    }

    public toString(): string{
        return super.toString() +
        "\nÍnicio de contrato: " + this.inicioContrato +
        "\nDuração: " + this.duracao + " meses";
    }

}