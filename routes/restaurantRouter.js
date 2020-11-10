
const express     = require('express');
const bodyParser  = require('body-parser');
const Restraunts  = require('../models/restaurant');


const restrauntRouter  = express.Router();
restrauntRouter.use(bodyParser.json());


restrauntRouter.route('/')
    .get((req, res, next) => {
        Restraunts.find({}).then(restaurants => {
            res.status = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(restaurants);
        }, (err) => next(err))
            .catch(error => console.log('OPPS!!!! ERROR OCCURED \n', error))
    })
    .post((req, res, next) => {
        console.log(req.body);
        Restraunts.create(req.body).then(restaurants => {
            res.status = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(restaurants) // this will setup response 
        }, (err) => next(err)).catch((err) => next(err));
    })

    module.exports = restrauntRouter;