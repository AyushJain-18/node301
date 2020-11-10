
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const orderSchema = new Schema({
    custumer_id: {
        type        : String,
        required    : true,
        unique      : true
    },
    restraunt_id:{
        type        : String,
        required    : true,
        unique      : true
    },
    totalPrice:{
        type        : Number,
        required    : true,
    },
    items: {
        type        : Array,
        required    : true,
        unique      : true
    },
    orderStatus: {
        type        : String,
        enum: ['processing', 'completed','cancelled'],
        required    : true,
    } 
});

const order = mongoose.model("order",orderSchema);

module.exports  = order;