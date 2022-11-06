const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImproveSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    age : {
        type : String,
        required : true
    },

    mobile : {
        type : String,
        required : true
    },

    type : {
        type : String,
        required : true
    },

    employees : {
        type : String,
        required : true
    },
    
    expectation : {
        type : String,
        required : true
    },

    status : {
        type : String,
        required : true,
        default : 'Pending'
    },

    description : {
        type : String,
        required : false,
    }
});

const Improve = mongoose.model("improve", ImproveSchema)
module.exports = Improve