// A super classe produto tem atributos e métodos que são comuns a todos os 
// outros tipos de produto(DVD, Eletronico e Livro);
export class Produto {
    private codigo: number; // protected = atributo/método é visível
    protected descricao: string; // na sua própria classe (super classe) e
    protected preco: number; // nas subclasses


    // polimorfismo no método construtor
    constructor();
    constructor(codigo: number, descricao: string, preco: number);
    constructor(codigo?: any, descricao?: any, preco?: any) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.preco = preco;
    }
    
    // Métodos getter e setters
    getCodigo(): number {
        return this.codigo;
    }
    setCodigo(codigo: number) {
        this.codigo = codigo;
    }


    getDescricao(): string {
        return this.descricao;
    }
    setDescricao(descricao: string) {
        this.descricao = descricao;
    }


    getPreco(): number {
        return this.preco;
    }
    setPreco(preco: number) {
        this.preco = preco;
    }



    public toString(): string {

        return "Código: " + this.codigo +
    
          "\nDescrição: " + this.descricao +
    
          "\nPreço: " + this.preco;
    
    }

}