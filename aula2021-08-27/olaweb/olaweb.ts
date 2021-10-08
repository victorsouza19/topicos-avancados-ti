//file system = leitura de arquivos
let fs = require('fs');

// rodar o servidor
let express = require('express');
let app = express();

// verificação se o servidor está funcionando
let server = app.listen(8080, function() {
    let port = server.address().port;
    try {
        console.log('Server runnning on port %s', port);
    } catch (error) {
        console.error(error);
    }
});

// configurando a rota principal
app.get('/', (req: any, res: any) => {
    // ler o arquivo ola.html
    fs.readFile('ola.html', (error: any, data: any) => {
        try {
            // enviar o cabeçalho com o status ok e o conteúdo
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        } catch (error) {
            // enviar erro se não funcionar o try
            console.error(error);

        }
    });
});

app.get('/pag', (req: any, res: any) => {
    // ler o arquivo pagina.html
    fs.readFile('pagina.html', (error: any, data: any) => {
        try {
            // enviar o cabeçalho com o status ok e o conteúdo
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        } catch (error) {
            // enviar erro se não funcionar o try
            console.error(error);

        }
    });
});

app.get('/teste', (req: any, res: any) => {
    try {
        let historicoPreco: number[] = [1990.00, 2100.00, 2050.00, 1990.90]

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<head><meta charset="utf-8"></head>');
        res.write('<h1>Histórico de Preços</h1>');

        for(let i in historicoPreco) {
            res.write(historicoPreco[i] + '<br>');
        }

        res.write('<br> <a href="/">Voltar</a>');

        res.end();

    } catch (error) {
        // enviar erro se não funcionar o try
        console.error(error);

    }
});