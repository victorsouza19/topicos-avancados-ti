class Pessoa {
    private name: string;
    private adress: string;
    private telephone: string;

    constructor () {
        this.name =  '';
        this.adress =  '';
        this.telephone =  '';
    }

    public get nome(): string {
        return this.name;
    }

    public set nome(value: string) {
        this.name = value;
    }

    
    public get endereco(): string {
        return this.adress;
    }

    public set endereco(value: string) {
        this.adress = value;
    }

    
    public get telefone(): string {
        return this.telephone;
    }

    
    public set telefone(value: string) {
        this.telephone = value;
    }

}

let p1: Pessoa = new Pessoa();
p1.nome = 'João';
p1.endereco = 'Rua Augusta, 10';
p1.telefone = '(19) 98560-9457';
console.log('Nome: ' + p1.nome + ' Endereco: ' + p1.endereco + ' Telephone: ' + p1.telefone);
console.log(p1)


let p2: Pessoa = new Pessoa();
p2.nome = 'Maria';
p2.endereco = 'Rua Amarela, 12';
p2.telefone = '(11) 98900-9407';
console.log('Nome: ' + p2.nome + ' Endereco: ' + p2.endereco + ' Telephone: ' + p2.telefone);
console.log(p2)