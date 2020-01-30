//Esse aqui é o cara que lida com as operações de algum model, ex. Listar dados

const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //buscar todos
    async index(req, res){
        const products = await Product.find();        
        return res.json(products);
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