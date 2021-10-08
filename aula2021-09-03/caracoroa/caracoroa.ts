let express = require('express');
let app = express();

let server = app.listen(8080, () => {
    try {
        let port = server.address().port;
        console.log("Server running on  %s port", port);

    } catch (error) {
        console.error(error);
    }
});

app.use(express.static('img'));

app.get('/caracoroa', (req: any, res: any) => {

    let cara: number= 0;
    let coroa: number= 0;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<head><meta charset="utf-8"></head>')
    res.write('<h1>Cara ou Coroa</h1>')

    for (let i: number = 0; i < 30; i++){
        let face = Math.floor(Math.random() * 2 + 1);
        
        if (face == 1) {
            cara++;
        } else if (face == 2) {
            coroa++;
        }

        res.write('<img src="Moeda_'+ face + '.jpg">');
    }

    res.write('<h4>Porcentagem de cada moeda:</h4>');
        res.write('Cara: ' + ((cara*100)/30).toFixed(1) + '% <br>');
        res.write('Coroa: ' + ((coroa*100)/30).toFixed(1) + '% <br>');

    res.end();
});