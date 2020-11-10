const Restraunts  = require('../models/restaurant');

const getAllRestaurants =async()=>{
   return await Restraunts.find({});
}

const addNewRestaurants = async(data)=>{
    return await Restraunts.create(data);
}

module.exports ={
     getAllRestaurants,
     addNewRestaurants
}