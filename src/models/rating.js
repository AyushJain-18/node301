const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ratingSchema = new Schema({
    restraunt_id : {
        type     : String,
        required : true,
        unique   : true 
    },
    custumer_id : {
        type     : String,
        required : true,
        unique   : true 
    },
    rating : {
        type     : Number,
        required : true,
    },
})

const rating =  mongoose.Model('rating',ratingSchema );

module.exports = rating;