import express from 'express';
import path from 'path';

const app = express();

const host = '0.0.0.0';
const porta = 3000;

app.use(express.static(path.join(process.cwd(),'./cadastro')));

function paginaInical(requisicao, resposta){
    resposta.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
         <h1>Olá Mundo</h1>
    </body>
    </html>`);
    resposta.end();
}
app.get('/',paginaInical);

app.listen(porta, host, () =>{
    console.log(`Servidor execultando em http://${host}:${porta}`);
});