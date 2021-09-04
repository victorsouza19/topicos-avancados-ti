let express = require('express');
let app = express();

let server = app.listen(8080, () => {
    try {
        let port = server.address().port;
        console.log("Server running on port %s", port);

    } catch (error) {
        console.error(error);
    }
});

app.use(express.static('img'));

app.get('/', (req: any, res: any) => {

    let vezes: number[] = [0, 0, 0, 0, 0, 0]

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<head><meta charset="utf-8"></head>')
    res.write('<h1>Jogo de Dados</h1>')

    for (let i: number = 0; i < 50; i++){
        let face = Math.floor(Math.random() * 6 + 1);
        vezes[face - 1]++;

        res.write('<img src="Dado_'+ face + '.jpg">');
    }

    res.write('<h4>Número lançamentos de cada dado:</h4>');
    for (let i: number = 0; i < 6; i++) {
        res.write('Lado ' + (i + 1) + ': ' + vezes[i] + '<br>');
    }

    res.end();
});

