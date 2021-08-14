class Calculo{

    somar(num1: number, num2: number): number;
    
    somar(num1: string, num2: string): string;

    somar(num1: any, num2: any): any {
        return (parseFloat(num1)+ parseFloat(num2));
    };
}

let calc: Calculo = new Calculo();

console.log('number: ' + calc.somar(1, 2) );
console.log('string: ' + calc.somar('1', '2') );
console.log('any: ' + calc.somar(1.010, 2.001) );