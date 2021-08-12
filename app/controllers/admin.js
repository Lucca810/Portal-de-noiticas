module.exports.formulario_inclusao_noticia = function(app,req,res){
    res.render("admin/form_add_noticia",{validacao : {},noticia : {}});
}

module.exports.noticias_salvar = function(app,req,res){
    var noticia = req.body;

    //devemos tratar na rota os requests, portanto tabmém tratamos sua validação
    req.assert('titulo','O título é obrigatório').notEmpty();
    req.assert('resumo','O Resumo é obrigatório').notEmpty();
    req.assert('resumo','O Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor','O Autor é obrigatório').notEmpty();
    req.assert('data_noticia','A Data é obrigatória e do formato de data').notEmpty().isDate({format : 'YYYY-MM-DD'});
    req.assert('noticia','A Notícia é obrigatório').notEmpty();

    var erros = req.validationErrors();
    if(erros){
        res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
        return;
    }

    var connection = app.config.conexao();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error,result){res.redirect("/noticias")}) // redirect é diferente de render, ele puxa outra rota, no caso a indicada e já executa suas funções e tals, bagulho brabo
}

