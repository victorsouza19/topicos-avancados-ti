// Todos os funcionários possuem atributos de número de 
//registro, nome, função, salário e situação.

export class Funcionario {
    protected numRegistro: number;
    protected nome: string;
    protected funcao: string;
    
    protected salario: number;
    
    protected situacao: string;
    

    constructor();
    constructor(numRegistro: number, nome: string, funcao: string, salario: number, situacao: string);
    constructor(numRegistro?: any, nome?: any, funcao?: any, salario?: any, situacao?: any){
        this.numRegistro = numRegistro,
        this.nome = nome,
        this.funcao = funcao,
        this.salario = salario,
        this.situacao = situacao
    };


    getNumRegistro(): number {
        return this.numRegistro;
    }
    setNumRegistro(numRegistro: number) {
        this.numRegistro = numRegistro;
    }


    getNome(): string {
        return this.nome;
    }
    setNome(nome: string) {
        this.nome = nome;
    }


    getFuncao(): string {
        return this.funcao;
    }
    setFuncao(funcao: string) {
        this.funcao = funcao;
    }
    

    getSalario(): number {
        return this.salario;
    }
    setSalario(salario: number) {
        this.salario = salario;
    }


    getSituacao(): string {
        return this.situacao;
    }
    setSituacao(situacao: string) {
        this.situacao = situacao;
    }

    public toString(): string{
        return "Número de registro: " + this.numRegistro +
        "\nNome: " + this.nome +
        "\nFunção: " + this.funcao +
        "\nSalário: " + this.salario +
        "\nSituação: " + this.situacao;
    }
}