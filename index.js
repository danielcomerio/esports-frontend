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
app.get('/cadastro', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/cadastro.html'));
});
app.get('/carrinho', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/carrinho.html'));
});
app.get('/configuracoes', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/configuracoes.html'));
});
app.get('/gerenciador-de-estoque', function (req, res) {
    res.sendFile(path.join(__dirname + 'pages/gerenciador-de-estoque.html'));
}); app.get('/gerenciador-de-pedidos', function (req, res) {
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

app.listen(process.env.PORT || 3000);
