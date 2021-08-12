module.exports.noticias = function(app,req,res){
    /* Conexão sem o Consign, pois o consign pode centralizar a conexão e se nescessário ser aberta apenas uma vez
    const connection = require('../../config/conexao')('portal_noticias'); //buscando o módulo de conexão
    connection.query('select * from noticias',function(error,result){res.render("noticias/noticias",{noticias : result})}); // roda a instrução no banco e envia os resultados para serem renderizados como um array na página notícias chamado notícias kj / o render renderiza com o ejs o conteúdo pedido
    */

    var connection = app.config.conexao(); //você acessa a conexão apenas quando a rota for acessada a parti da variável/instância app
    var noticiasModel = new app.app.models.NoticiasDAO(connection); //está instanciando uma classe passada por noticiasModel
       
    noticiasModel.getNoticias(function(error,result){res.render("noticias/noticias",{noticias : result})})
}

module.exports.noticia = function(app,req,res){
    var connection = app.config.conexao();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    var id_noticia = req.query; // envia todos os dados da query por url, no caso o id_noticia

    noticiasModel.getNoticia(id_noticia,function(error,result){res.render("noticias/noticia",{noticia : result})});
}