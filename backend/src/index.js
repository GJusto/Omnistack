const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
rota / recurso


Métodos HTTP
GET: buscar/listar informação no back
POST: criar informação no back
PUT: alterar informação no back
DELETE: deletar informação no back
*/

/**
 * Tipos de parametros
 * 
 * Query params: parâmetro nomeados enviados na rora após '?' (filtros, paginação etc)
 * route params: parametros utilizados para identificar recursos
 * request body: corpo da requisição utilizado para criar ou alterar recursos
 */

 /**
  * BDs
  * Driver: SELECT * from users
  * Query Builder: table('users').select('*').WHERE()
  */


app.listen(3333);
