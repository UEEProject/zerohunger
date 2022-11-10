const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const WorkshopCategory = new Schema({   
    categorycode: {
        type : String,
        required : true
    },   
    categoryname: {
        type : String,
        required : true
    },
    imgUrl: {
        type: String,
        required: false
    },
    
});

const Category = mongoose.model("workshopcategory",WorkshopCategory) 
module.exports = Category