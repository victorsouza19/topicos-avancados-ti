const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const cliente = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function listar() {
  try {
    await cliente.connect();
    console.log("Conectado!");

    const banco = cliente.db('loja');
    var cursor = banco.collection('produtos').find();
    
    await cursor.forEach(function(doc) {
      console.log("\nCódigo: " + doc.codigo);
      console.log("Descrição: " + doc.descricao);
      console.log("Preço: " + doc.preco);
    });


  } finally {
    await cliente.close();

  }
}

listar();

