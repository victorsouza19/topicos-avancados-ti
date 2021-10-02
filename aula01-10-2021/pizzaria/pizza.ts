export class Pizza{
  
  private nome: string[] = ['(Nenhum)', 'Mussarela',
    'Calabresa', 'Catupiry', 'Aliche','Frango', 'Milho', 'Atum', 'Tomate','Presunto'];

  private valor: number[] = [0.00, 9.00, 5.50, 6.50,
    8.00, 6.00, 4.50, 7.00, 5.00, 8.00];
  

  public montar(ingr: string[]): string {
    let msg: string = 'A sua pizza é de ';
    let preco: number = 0.00;
      
    for (var chave in ingr) {
        let i: number = parseInt(ingr[chave]);

        msg += this.nome[i] + ', ';
        preco += this.valor[i];
    }

    msg += 'irá custar R$' + preco.toFixed(2);
    return msg;
  }
}