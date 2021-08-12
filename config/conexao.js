var mysql = require('mysql');//pegando o módulo de mysql

var conMySql = function(){
    var connection = mysql.createConnection({host : 'localhost', user : 'root', password : '', database : 'portal_noticias'});
    return connection;
}

module.exports = function(){
    return conMySql;
}

/*
module.exports = function(){ //poderia ter parâmetro para selecionar database, mas não é necessário
    var mysql = require('mysql');//pegando o módulo de mysql
    var connection = mysql.createConnection({host : 'localhost', user : 'root', password : '', database : 'portal_noticias'});
    return connection;
}

método sem o consign, se mantivesse ia conectar infinito kj
*/