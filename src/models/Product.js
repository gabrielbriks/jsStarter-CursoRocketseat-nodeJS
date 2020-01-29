const mongoose = require('mongoose');

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

//Registrando um model na nossa aplicação
mongoose.model('Product', ProductSchema);