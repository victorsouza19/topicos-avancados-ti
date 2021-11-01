# Sobre o Mongo DB

*  O Mongo DB é um banco de dados não relacional,       utilizado comumente em conjunto com o NodeJS pelo fato de operarem bem juntos.

* Diferente dos bancos de dados relacionais, o MongoDB não lida com tabelas, e não possui uma estrutura definida de campos para cada tabela, e isso é um diferencial que o torna mais dinâmico e mais agradável de acordo com cada aplicação.

* Apesar da estrutura e comandos serem bem diferentes, o MongoDB cumpre funções equivalentes aos bancos de dados relacionais quando se trata de manipulação de dados.
Um outro ponto a se destacar, é sua interação via JSON, conceito muito utilizado quando lidamos com API's no nosso software.

## Comandos úteis:

### Iniciando o MongoDB

<code>mongo<code>


### Listando databases

<code>show databases<code>


### Acessando uma database

<code>use loja<code>


### Listando as collections (tabelas)

<code>show collections<code>


### buscar documentos da collection 'produtos' - Método find()

<code>db.produtos.find()<code>


### adicionando docuemntos à collection 'produtos'

<code>db.produtos.insertOne({ codigo: 1, nome: 'Computador', preco: 3998.90})<code>


### adicionando varios documentos à uma collection

<code>db.produtos.insertMany([{ codigo: 2, nome: 'Geladeira', preco: 2434.00, status: 'esgotado'} , { codigo: 3, nome: 'Mouse', preco: 45.99, status: 'em estoque'}])<code>


### definindo condições de busca (where)

  #### Maior que '$gt'
  <code>db.produtos.find({preco: {$gt: 2000}})<code>

  #### Não possui '$nin'(not in)

  <code>db.produtos.find({codigo: {$nin: [20,23]}})<code>

  #### possui '$in'(not in)

  <code>db.produtos.find({codigo: {$in: [20,23]}})<code>

  #### Alterando um documento
  
  <code>db.produtos.updateOne({codigo: 20}, {$set: {preco: 3050}}) <code>

  #### Alterando um documento com mais de um filtro

  <code>db.produtos.updateOne({codigo: 20, preco: 3050}, {$set: {preco: 2000}})<code>


  #### Apagando um documento

  <code>db.produtos.deleteOne({ codigo: 20 })<code>

  #### Apagando todos os documentos de acordo com a condição

  <code>db.produtos.deleteMany({ codigo: 20 })<code>


