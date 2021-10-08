import { Pizza } from "./pizza";

let fs = require('fs');
let http = require('http');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: true });

let server = app.listen(8080, () => {
  let port = server.address().port;
  console.log(`Server is running on port ${port}`);
});


app.get('/', (req:any, res: any) => {
  fs.readFile('pizza-form.html', (erro:any, dado: any) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dado);
    res.end();
  });
});

app.post('/pizza', urlencodedParser, (req:any, res: any) => {
  fs.readFile('pizza-res.html', (erro:any, dado: any) => {
    console.log(req.body);
    let ingr: string[] = req.body;

    let pizza: Pizza = new Pizza();
    dado = dado.toString().replace("{{mensagem}}", pizza.montar(ingr));

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dado);
    res.end();
  });
});