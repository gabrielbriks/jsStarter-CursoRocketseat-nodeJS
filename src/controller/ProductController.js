//Esse aqui é o cara que lida com as operações de algum model, ex. Listar dados

const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //buscar todos
    async index(req, res){                                                                             
        const { page =1 } = req.query; //Page = 1 ?? Pq se ele nao encontrar o parametro define 1 como default
        const products = await Product.paginate({ /*Condições Where, etc*/ },{ page, limit:10 });  //Trocando o 'find()' para 'paginate', assim já estara implementado a paginação      
        return res.json(products);                                                                  
        /*
            page: "Pagina atual";   limit: "qdt maxiam de registros"
            Na URL buscamos o parametro page='numero da pag', exemplo: "/products?page=2";
        */
    },

    //Rota de detalhe (apenas um)
    async show(req, res){
        const product = await Product.findById(req.params.id);  
        return res.json(product);
    },

    //Rota de cadastro 
    async store(req,res){
        const product = await Product.create(req.body); 
       return res.json(product);
    },

    async update(req, res){
            /* A propriedade "new:true", diz que ao retornar o registro alterado, deve retornar 
                com os dados atualizados caso ao contrario, se nao dissermos isso ele irá trazer 
                o retorno com os dados antigos
            */
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
    },

    async destroy(req, res){
        const product = await Product.findOneAndRemove(req.params.id);
        return res.send();
    }


};