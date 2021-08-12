//requisitando as configurações do servidor pelo módulo
var app = require('./config/server');
/*roteamento das páginas /o parênteses após a declaração da variável executa a função recebida do mósulo ao declarar a variável -- MÉTODO SEM CONSIGN
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormInclusãoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
*/

app.listen(3000, function(){
    console.log("Servidor rodando com node.js");
});