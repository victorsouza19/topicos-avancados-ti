const express = require("express");
const app = express();

// database
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect((error) => {
  assert.equal(null, error);
  const database = client.db('loja');

  // initializing server 
  let server = app.listen(3000, () => {
    let port = server.address().port;
    console.log(`Server running on port: ${port}!`);
  });

  // static content
  app.use(express.static("public"));

  // setting body config to form requests
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  // setting view engine
  app.set('view engine', 'ejs');

  app.get("/", (req, res) => {
    database.collection('produtos').find().toArray((error, result) => {

      assert.equal(null, error);
      res.render('index.ejs', {dados: result});

    });
  });


  app.post("/produtos/incluir", (req,res) => {
    let produto = req.body;
    console.log('Incluir produto' + JSON.stringify(produto));
    
    database.collection('produtos').insertOne(produto, (error, res) => {
      assert.equal(null, error);
      console.log("1 documento inserido.");
    });
    return res.send(produto);

  });

  app.post("/produtos/editar", (req, res) => {
    let produto = req.body;
    console.log('Editar produto: ' + JSON.stringify(produto));

    database.collection('produtos').updateOne({codigo: produto.codigo}, {$set: produto}, (error, res) => {
      assert.equal(null, error);

      console.log("1 produto editado");
    });
    return res.send(produto);

  });

  app.post("/produtos/deletar", (req, res) => {
    let produto = req.body;

    console.log('Excluir produto: '+ JSON.stringify(produto));

    database.collection('produtos').deleteOne(produto, (error, res) => {
      assert.equal(null, error);
      console.log("1 documento excluído.");
    });
    return res.send(produto);
  });

  app.post("/produtos/getproduto", function(req, res){
    let produto = req.body;
    console.log('Produto: ' + JSON.stringify(produto));
    
    database.collection('produtos').findOne(produto, (erro, item) => {
      assert.equal(null, erro);
      return res.send(item);
    });
  });
});
