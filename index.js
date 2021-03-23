var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname));
app.use("/images", express.static(__dirname + '/images'));
app.use("/scripts", express.static(__dirname + '/scripts'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/home.html'));
});

// add other routes below
app.get('/cadastro.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/cadastro.html'));
});
app.get('/carrinho.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/carrinho.html'));
});
app.get('/configuracoes.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/configuracoes.html'));
});
app.get('/gerenciador-de-estoque.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/gerenciador-de-estoque.html'));
}); app.get('/gerenciador-de-pedidos.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/gerenciador-de-pedidos.html'));
});
app.get('/home-login.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/home-login.html'));
});
app.get('/lista-produto-calcados.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-calcados.html'));
});
app.get('/lista-produto-equipamentos.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-equipamentos.html'));
});
app.get('/lista-produto-feminino.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-feminino.html'));
});
app.get('/lista-produto-infantil.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-infantil.html'));
});
app.get('/lista-produto-masculino.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-masculino.html'));
});
app.get('/lista-produto-roupas.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/lista-produto-roupas.html'));
});
app.get('/pagamento.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/pagamento.html'));
});
app.get('/produto.html', function (req, res) {
    res.sendFile(path.join(__dirname + 'produto/home.html'));
});

app.listen(process.env.PORT || 3000);
