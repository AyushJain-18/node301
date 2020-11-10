require('dotenv').config();
const express       = require('express');
const app           = express();
const createError   = require('http-errors');
const morgan        = require('morgan');

const connectDB     = require('./db/connection');
const restaurantRouter =  require('./routes/restaurantRouter');

// DB Connection
connectDB();

// create "middleware"
app.use(morgan('combined')); 
// Routers
app.get('/', (req,res)=>  res.send('Hello world'))

app.use('/restaurant', restaurantRouter);


// error 
app.use((req,res,next)=>next(createError(404)))


const PORT = process.env.PORT|| 3000;

app.listen(PORT,()=>console.log('App is running on \n http://localhost:3000/'));