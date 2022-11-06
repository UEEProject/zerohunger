const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const CashSchema = new Schema({      
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },
    
    bank : {
        type : String,
        required : true
    },

    amount : {
        type : String,
        required : true
    },

    details : {
        type : String,
        required : true
    },
    
    slip : {
        type : String,
        required : true
    }

});

const Cash = mongoose.model("cash",CashSchema) 
module.exports = Cash