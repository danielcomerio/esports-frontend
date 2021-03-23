var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
console.log(path.join(__dirname + 'pages/home.html'));


const http = require('http')
const fs = require('fs')
var pat = 'https://esportes-frontend.herokuapp.com/';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('pages/home.html').pipe(res)
})

// add other routes below
app.get('/cadastro.html', function (req, res) {
    res.redirect(pat + 'pages/cadastro.html');
});
app.get('/carrinho', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/carrinho.html'));
});
app.get('/configuracoes', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/configuracoes.html'));
});
app.get('/gerenciador-de-estoque', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/gerenciador-de-estoque.html'));
});
app.get('/gerenciador-de-pedidos', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/gerenciador-de-pedidos.html'));
});
app.get('/home-login', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/home-login.html'));
});
app.get('/lista-produto-calcados', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-calcados.html'));
});
app.get('/lista-produto-equipamentos', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-equipamentos.html'));
});
app.get('/lista-produto-feminino', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-feminino.html'));
});
app.get('/lista-produto-infantil', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-infantil.html'));
});
app.get('/lista-produto-masculino', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-masculino.html'));
});
app.get('/lista-produto-roupas', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-roupas.html'));
});
app.get('/pagamento', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/pagamento.html'));
});
app.get('/produto', function (req, res) {
    res.sendFile(path.join(__dirname + 'produto/home.html'));
});


server.listen(process.env.PORT || 3000)
