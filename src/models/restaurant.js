const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// menu schema
const menuSchema = new Schema({
    item_name: {
        type    : String,
        required: true
    },
    item_type: { 
        type    : String,
        enum: ['starter', 'main course','dessert'],
        required: true
    },
    price: { 
        type    : Number,
        min     : 0,
        required: true
    },
    is_veg:{
        type    : Boolean,
        required: true
    }
}, {
    timestamps: true // this will automatically  add 2 timestamp createdAt and UpatedAT
});

// restaurant schema
const restaurantSchema = new Schema({
    name: {
        type     : String,
        required : true,
        unique   : true
    },
    address: {
        type    : String,
        required: true
    },
    city: {
        type    : String,
        required: true
    },
    rating: {
        type    : Number,
        min     : 1,
        max     : 5,
        required: true
    },
    menuItems: {
        type: [menuSchema],
        required: true
    }
}, {
    timestamps: true // this will automatically  add 2 timestamp createdAt and UpatedAT
});


let restaursnts = mongoose.model('Restaurant',restaurantSchema);
module.exports = restaursnts;