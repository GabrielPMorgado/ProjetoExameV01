import express from 'express';

const app = express();

const host = '0.0.0.0';
const porta = 3000;

function paginaInical(requisicao, resposta){
    resposta.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`);
    resposta.end();
}
app.get('/',paginaInical);

app.listen(porta, host, () =>{
    console.log(`Servidor execultando em http://${host}:${porta}`);
});