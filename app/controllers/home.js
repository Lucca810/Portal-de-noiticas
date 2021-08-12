module.exports.home = function(app,req,res){
    
    var connection = app.config.conexao();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function(error,result){res.render("home/index", {noticias : result});});

}