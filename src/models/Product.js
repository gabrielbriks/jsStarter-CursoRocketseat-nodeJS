const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,//Como se fosse um 'NOT NULL'
    },
    description:{
        type: String,
        required: true,
    },
    url:{
        type:String,
        required: true,
    },
    createAt: { // Data de criação
        type: Date,
        default: Date.now,
    },
});

//Adicionando plugin do mongo para paginação
ProductSchema.plugin(mongoosePaginate);

//Registrando um model na nossa aplicação
mongoose.model('Product', ProductSchema);