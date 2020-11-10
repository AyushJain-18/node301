
const express     = require('express');
const bodyParser  = require('body-parser');
const RestrauntController = require('../controllers/restrauntsController');


const restrauntRouter  = express.Router();
restrauntRouter.use(bodyParser.json());


restrauntRouter.route('/')
    .get((req, res, next) => {
        RestrauntController.getAllRestaurants()
            .then(restaurants => {
                    res.status = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(restaurants);
            }, (err) => next(err))
            .catch(error => console.log('OPPS!!!! ERROR OCCURED \n', error))
    })

    .post((req, res, next) => {
       RestrauntController.addNewRestaurants(req.body)
        .then(restaurants => {
            res.status = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(restaurants) 
        }, (err) => next(err)).catch((err) => next(err));
    })

    module.exports = restrauntRouter;