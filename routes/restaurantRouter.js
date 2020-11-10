
const express     = require('express');
const bodyParser  = require('body-parser');
const Restraunts  = require('../models/restaurant');


const restrauntRouter  = express.Router();
restrauntRouter.use(bodyParser.json());


restrauntRouter.route('/')
    .get((req, res, next) => {
            res.status = 200;
            //res.setHeader('Content-Type', 'application/json');
            res.send('Restraunt Router') // this will setup response 
        })
    // .post((req, res, next) => {
    //     Dishes.create(req.body).then(dish => {
    //         res.status = 200;
    //         res.setHeader('Content-Type', 'application/json');
    //         res.json(dish) // this will setup response 
    //     }, (err) => next(err)).catch((err) => next(err));
    //     //res.end(`ADDING YOUR DISH with name ${req.body.name} and discription is ${req.body.description}`)
    // })

    
module.exports = restrauntRouter;