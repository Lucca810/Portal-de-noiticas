//modulo de configuração de servidor
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs'); //setta a view wngine como ejs
app.set('views', './app/views') // setta o caminho das views e o ./ conta a partir de onte o módulo é chamado

app.use(express.static('./app/public'));//permite o acesso de todos os arquivos estáticos automaticamente, basicamente tudo de estilização e afins
app.use(bodyParser.urlencoded({extended: true})); //permite recuperação de informações via post
app.use(expressValidator()) //inclui o express validator no projeto

consign().include('app/routes').then('config/conexao.js').then('app/models').then('app/controllers').into(app); //roteia automáticamente tudo dentro de routes, no caso a pasta que escolhi / o then ermite a execução de mais um comando, no caso a inclusão da conexão com o my sql

module.exports = app;

