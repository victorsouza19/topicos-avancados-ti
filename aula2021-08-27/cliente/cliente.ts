interface ICliente {
  // A interface irá conter o protótipo dos métodos públicos
  setCPF(cpf: string): void;
  getCPF(): string;
  setNome(nome: string): void;
  getNome(): string;
  setTelefone(telefone: string): void; 
  getTelefone(): string;
}

class Cliente implements ICliente {
  private cpf: string = '';
  private nome: string = '';
  private telefone: string = '';

  setCPF(cpf: string): void {
    this.cpf = cpf;
  }
  getCPF(): string {
    return this.cpf;
  }
  setNome(nome: string): void {
    this.nome = nome;
  }
  getNome(): string {
    return this.nome;
  }
  setTelefone(telefone: string): void {
    this.telefone = telefone;
  }
  getTelefone(): string {
    return this.telefone;
  }
  toString(): string { 
    return "CPF: " + this.cpf + 
      "\nNome: " + this.nome + 
      "\nTelefone: " + this.telefone; }
}

let cli: Cliente = new Cliente();
cli.setCPF('111.111.111-11'); 
cli.setNome('Cláudio Oliveira'); 
cli.setTelefone('(11) 4567-8901');
console.log (cli.toString());