const express = require('express');
const routes = express.Router();
const ProductConroller = require('./controller/ProductController');

//Route Buscar lista
routes.get('/products', ProductConroller.index);

//Buscar Detalhe, (apenas um)
routes.get('/products/:id', ProductConroller.show);

//Cadastrar Novo
routes.post('/products', ProductConroller.store);

//Rota Atualiza 
routes.put('/products/:id', ProductConroller.update);

//Rota Excluir
routes.delete('/products/:id', ProductConroller.destroy);


module.exports = routes;