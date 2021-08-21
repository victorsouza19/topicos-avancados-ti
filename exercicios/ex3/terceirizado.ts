// Os funcionários terceirizados apresentam data de início, duração do contrato e o nome da empresa prestadora de serviços.

import { Funcionario } from "./funcionario";

export class Terceirizado extends Funcionario{
    private inicioContrato: string;
    private duracao: number;
    private empresa: string;

    constructor();
    constructor(numRegistro: number, nome: string, funcao: string, salario: number, situacao: string, inicioContrato: string, duracao: number, empresa: string);
    constructor(numRegistro?: any, nome?: any, funcao?: any, salario?: any, situacao?: any, inicioContrato?: any, duracao?: any, empresa?: any){
        super(numRegistro, nome, funcao, salario, situacao),
        this.inicioContrato = inicioContrato,
        this.duracao = duracao,
        this.empresa = empresa;
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


    getEmpresa(): string {
        return this.empresa;
    }
    setEmpresa(empresa: string) {
        this.empresa = empresa;
    }

    public toString(): string{
        return super.toString() +
        "\nÍnicio de contrato: " + this.inicioContrato +
        "\nDuração: " + this.duracao + " meses" +
        "\nEmpresa: " + this.empresa;
    }

}