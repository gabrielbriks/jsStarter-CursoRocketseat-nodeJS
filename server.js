//importando a lib express
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const app  = express();

//estou dizendo para permitir que eu envie dados para a minha aplication com formato json
app.use(express.json());

//Iniciando Banco de Dados
mongoose.connect('mongodb://localhost:27017/nodeapi', 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
requireDir('./src/models/');


/* O 'use' se comporta como se fosse um curinga, que consegue
receber todos os tipos de requisições como GET, POST etc...

A linha Abaixo diz:  toda vez que e recebermos uma requisição
apartir da rota '/api', mandaremos para o nosso arquivos routes
*/
app.use('/api', require('./src/routes'))



/**
 *  falando para o app que no caso é o express, ficar ouvindo a porta definida no parametro.
 *  Agora podemos acessar o nosso localhost com a porta 3001, sendo assim o primeiro acesso,
 *  nao ira aparecer nada pois ainda nao definimos a rota inicial dentro da nossa aplicação. 
 *  */
app.listen(3001);

