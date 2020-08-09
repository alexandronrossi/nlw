// servidor
const express = require('express');
const server = express();
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages');

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

// iniciar servidor
server
.use(express.urlencoded({extended: true}))         /* Receber os dados pelo body */
.use(express.static('public'))         /* configurar arquivos estaticos */
.get('/', pageLanding)                 /* setar url principal */
.get('/study', pageStudy)              /* setar url da pagina study */
.get('/give-classes', pageGiveClasses) /* setar url da pagina give classes */
.post('/save-classes', saveClasses)    /* configurar rota post da pagina para receber dados */
.listen(5500);
