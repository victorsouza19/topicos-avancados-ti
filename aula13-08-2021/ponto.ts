class Ponto {
    private x: number;
    private y: number;

    // definindo os métodos possíveis de aplicação
    constructor(x: number, y: number);
    constructor(x: string, y: string);
    constructor(x: string);

    // esse método só vai rodar se obedecer um dos métodos anteriores
    constructor(x: any, y?: any) {
        this.x = parseFloat(x);
        if(!y) {
            y = -1;
        }
        this.y = parseFloat(y);
    }
    
    getPonto() {
        return(this.x + ',' +  this.y);
    }
    
}

let pt1: Ponto = new Ponto(3, 7);
console.log('number: x, y = ' + pt1.getPonto());

let pt2: Ponto = new Ponto('3', '7');
console.log('string: x, y = ' + pt2.getPonto());

let pt3: Ponto = new Ponto('3');
console.log('string: x = ' + pt3.getPonto());

