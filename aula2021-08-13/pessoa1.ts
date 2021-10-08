class Pessoa1 {
    private _name: string;
    private _adress: string;
    private _telephone: string;

    constructor () {
        this._name =  '';
        this._adress =  '';
        this._telephone =  '';
    }

    public get name(): string {
        // o método get é executado quando se chama o próprio método.
        return this._name;
    }
    public set name(value: string) {
        // o método set é executado quando ocorre uma atibuição ( sinal de = ).
        this._name = value;
    }

    public get adress(): string {
        return this._adress;
    }
    public set adress(value: string) {
        this._adress = value;
    }

    public get telephone(): string {
        return this._telephone;
    }
    public set telephone(value: string) {
        this._telephone = value;
    }

}

let p11: Pessoa1 = new Pessoa1();
p11.name = 'João';
p11.adress = 'Rua Augusta, 10';
p11.telephone = '(19) 98560-9457';
console.log(p11);


let p22: Pessoa1 = new Pessoa1();
p22.name = 'Maria';
p22.adress = 'Rua Amarela, 12';
p22.telephone = '(11) 98900-9407';
console.log(p22);