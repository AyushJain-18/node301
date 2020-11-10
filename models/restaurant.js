const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// menu schema
const menuSchema = new Schema({
    item_name: {
        type    : String,
        required: true
    },
    item_type: { // starter, main course, dessert
        type    : String,
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
        type    : String,
        required: true
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
    menuItems: [menuSchema]
}, {
    timestamps: true // this will automatically  add 2 timestamp createdAt and UpatedAT
});


let restaursnts = mongoose.model('restaurants',restaurantSchema);
module.exports = restaursnts;