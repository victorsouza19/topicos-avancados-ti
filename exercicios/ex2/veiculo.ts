// Para  todos  os  veículos  são  armazenados  o  número
//do  chassi,  o  número  da  placa,o fabricante,  o  
//modelo,  o  ano  de  fabricação  e  a  cor

export class Veiculo {
    protected chassi: string; 
    protected placa: string;
    protected fabricante: string;
    protected modelo: string;
    protected ano: number;
    protected cor: string; 

    constructor();
    constructor(chassi: string, placa: string, fabricante: string, modelo: string, ano: number, cor: string);
    constructor(chassi?: any, placa?: any, fabricante?: any, modelo?: any, ano?: any, cor?: any) {
        this.chassi = chassi;
        this.placa = placa;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    
    getChassi(): string {
        return this.chassi;
    }
    setChassi(chassi: string) {
        this.chassi = chassi;
    }


    getPlaca(): string {
        return this.placa;
    }
    setPlaca(placa: string) {
        this.placa = placa;
    }


    getAno(): number {
        return this.ano;
    }
    setAno(ano: number) {
        this.ano = ano;
    }


    getFabricante(): string {
        return this.fabricante;
    }
    setFabricante(fabricante: string) {
        this.fabricante = fabricante;
    }


    getModelo(): string {
        return this.modelo;
    }
    setModelo(modelo: string) {
        this.modelo = modelo;
    }


    getCor(): string {
        return this.cor;
    }
    setCor(cor: string) {
        this.cor = cor;
    }



    public toString(): string {

        return "Chassi: " + this.chassi +
          "\nPlaca: " + this.placa +
          "\nFabricante: " + this.fabricante +
          "\nModelo: " + this.modelo +
          "\nAno: " + this.ano +
          "\nCor: " + this.cor;
    
    }

}