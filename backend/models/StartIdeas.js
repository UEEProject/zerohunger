const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StartIdeaSchema = new Schema({
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

    idea : {
        type : String,
        required : true
    },

    summary : {
        type : String,
        required : false
    },
    
    goals : {
        type : String,
        required : false
    },

    skills : {
        type : String,
        required : false
    },

    qualifications : {
        type : String,
        required : false
    },

    invest : {
        type : String,
        required : true,
    },

    options : {
        type : String,
        required : true,
    },

    description : {
        type : String,
        required : false,
    },

    status : {
        type : String,
        required : false,
        default : 'Padding'
    }
});

const StartIdeas = mongoose.model("startBusiness", StartIdeaSchema)
module.exports = StartIdeas