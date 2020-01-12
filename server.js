//importando a lib express
const express = require('express');

const app  = express();

/**
 * Estamos definindo a rota inicial da nossa aplication, para isso so iremos adicionar 
 * apenas uma barra, 
 * em nosso segundo Parametro, iramos definir uma função que recebera dois paramtero 
 * 'req' & 'res'; O 'req' quer dizer uma requisição & o 'res' quer dizer o nosso response.
 * 
 * Entao por exemplo, quando atualizarmos a page, nesse momento estamo realizando uma requisicao
 * para o nosso servidor(server), e todos as informações da requisição estara dentro dessa 'resq'.
 * 
 * Como:
 *    Paramentro, corpo da requisição, cabeçalho, autenticação, id e por aí vai
 * 
 * O Res, sera a resposta que iremos dar a requisição, estarao todas as informações para mandarmos a
 * resposta.
 */
app.get('/', (req,res) => {
  res.send('<b> <i>Hello GabrielBriks ... </i></b>');
});

/**
 *  falando para o app que no caso é o express, ficar ouvindo a porta definida no parametro.
 *  Agora podemos acessar o nosso localhost com a porta 3001, sendo assim o primeiro acesso,
 *  nao ira aparecer nada pois ainda nao definimos a rota inicial dentro da nossa aplicação. 
 *  */
app.listen(3001);

