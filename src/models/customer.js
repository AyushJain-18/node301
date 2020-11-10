const order    = require('./order') 
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const custumerSchema = new Schema({
    name: {
        type        : String,
        required    : true
    },
    age: {
        type        : Number,
    },
    phone:{
        type        : Number,
        required    : true,
        unique      : true
    },
    email: {
        type        : String,
        required    : true,
        unique      : true,
    },
    password:{
        type        : String
    },
    city: {
        type        : String
    },
    orders          : [order]
});

const custumer = mongoose.model('custumer', custumerSchema);
module.exports = custumer;
