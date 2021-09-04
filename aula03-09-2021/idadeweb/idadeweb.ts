let fs = require('fs');
let express = require('express');
let http = require('http');
let app = express();
let bodyParser = require('body-parser');
let urlEncodedParser = bodyParser.urlencoded({extended: true});


let server = app.listen(8080, function() {
    let port = server.address().port;
    try {
        console.log('Server runnning on port %s', port);
    } catch (error) {
        console.error(error);
    }
});


app.get('/', (req: any, res: any) => {

    fs.readFile('idade-form.html', (error: any, data: any) => {
        try {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        } catch (error) {
            console.error(error);

        }
    });
});

app.post('/idade', urlEncodedParser, (req: any, res: any) => {

    fs.readFile('idade-res.html', (error: any, data: any) => {
        try {
            let hoje: Date = new Date();
            let nome: string = req.body.nome;
            let anonasc: number = parseInt(req.body.anonasc);
            let idade: number = hoje.getFullYear() - anonasc;

            data = data.toString().replace("{{nome}}", nome);
            data = data.toString().replace("{{anonasc}}", anonasc);
            data = data.toString().replace("{{idade}}", idade);

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
            
        } catch (error) {
            console.error(error);

        }
    });
});