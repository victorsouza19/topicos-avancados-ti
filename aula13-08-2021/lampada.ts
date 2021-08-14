class Lampada {
    private estado: boolean;

    constructor() {
        this.estado = false;
    }

    acender() {
        this.estado = true;
    }
    
    apagar() {
        this.estado = false;
    }

    getEstado() {
        if (this.estado == false) {
            return 'Desligada';
        } else {
            return 'Ligada';
        } 
    }

}

let lamp1: Lampada= new Lampada();
let lamp2: Lampada= new Lampada();

lamp1.acender();

console.log('Lampada 1: ' +lamp1.getEstado());
console.log('Lampada 2: ' +lamp2.getEstado());