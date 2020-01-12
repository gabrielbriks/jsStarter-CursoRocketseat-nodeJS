//importando a lib express
const express = require('express');

const app  = express();

/**
 *  falando para o app que no caso é o express, ficar ouvindo a porta definida no parametro.
 *  Agora podemos acessar o nosso localhost com a porta 3001, sendo assim o primeiro acesso,
 *  nao ira aparecer nada pois ainda nao definimos a rota inicial dentro da nossa aplicação. 
 *  */
app.listen(3001);

