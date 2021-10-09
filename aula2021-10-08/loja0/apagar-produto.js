const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const cliente = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function apagar() {
  try {
    await cliente.connect();
    console.log("Conectado!");

    const banco = cliente.db('loja');

    await banco.collection('produtos').deleteOne({
      codigo: 10 
    });
    
  } finally {
    console.log("Apagado!");
    await cliente.close();

  }
}

apagar();

