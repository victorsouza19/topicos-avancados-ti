class Ola {
// Atributo nome, apenas visível dentro da classe
    private saudacao: string;
    private nome: string; 

// Define como um objeto é criado
    constructor (parametro : string) { 

    // this indica um atributo/método da classe
        this.nome = parametro; 
        this.saudacao = "Olá";
    }

// criando o método para alterar um atributo
    setSaudacao (s: string) { 
        this.saudacao = s; 
    }

// criando um método
    getOla(): string {
        return (this.saudacao + ", " + this.nome + "!");
    }
}

// Criando um objeto
// Um objeto só pode ser criado a partir de uma classe
    let ola: Ola = new Ola('Victor');
    //  /\    /\             /\ 
    // obj   classe         valor 

// Chamando o método getOla 
    console.log(ola.getOla());

// Alterando o atributo saudacao
    ola.setSaudacao('Bom dia');
    console.log(ola.getOla());
