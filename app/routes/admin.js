module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req,res){ 
        app.app.controllers.admin.formulario_inclusao_noticia(app,req,res); // roteamento com controller, deixando todas as funcões e demais coisas lá
    });

    app.post('/noticias/salvar', function(req,res){ //requisição post não é get no app., não seja burro
        app.app.controllers.admin.noticias_salvar(app,req,res);
    });
}

