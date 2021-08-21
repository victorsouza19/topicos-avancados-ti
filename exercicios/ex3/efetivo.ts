// Funcionários efetivos possuem atributos de data de admissão e demissão.

import { Funcionario } from "./funcionario";

export class Efetivo extends Funcionario{
    private admissao: string;
    private demissao: string;

    constructor();
    constructor(numRegistro: number, nome: string, funcao: string, salario: number, situacao: string, admissao: string, demissao: string);
    constructor(numRegistro: number, nome: string, funcao: string, salario: number, situacao: string, admissao: string); // construtor sem data de demissão, no caso de funcionário que ainda não foi demitido
    constructor(numRegistro?: any, nome?: any, funcao?: any, salario?: any, situacao?: any, admissao?: any, demissao?: any){
        super(numRegistro, nome, funcao, salario, situacao),
        this.admissao = admissao,
        this.demissao = demissao;
    }


    getAdmissao(): string {
        return this.admissao;
    }
    setAdmissao(admissao: string) {
        this.admissao = admissao;
    }


    getDemissao(): string {
        return this.demissao;
    }
    setDemissao(demissao: string) {
        this.demissao = demissao;
    }

    public toString(): string{
        return super.toString() +
        "\nData de admissão: " + this.admissao +
        "\nData de demissão: " + this.demissao;
    }

}