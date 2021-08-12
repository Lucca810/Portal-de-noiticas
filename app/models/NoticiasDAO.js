function NoticiasDAO(connection){
    this._connection = connection; //fac com que cão precise sempre passar a conexão para cada função
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc',callback);
}
NoticiasDAO.prototype.getNoticia = function(id_noticia,callback){
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia,callback);
}
NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ?',noticia,callback); // a interrogação é fundamental para a interpretação do código, ele pega a chave de campo e valor automaticamente e já insere, bagulho doido
}
NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5',callback);
}
module.exports = function(){

    //Exporta a classe Noticias
    return NoticiasDAO;
}