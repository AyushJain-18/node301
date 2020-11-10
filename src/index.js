require('dotenv').config();
const express       = require('express');
const app           = express();
const createError   = require('http-errors');
const morgan        = require('morgan');
const winston       = require('winston');

const connectDB     = require('./db/connection');
const restaurantRouter =  require('./routes/restaurantRouter');

// DB Connection
connectDB();

// create "middleware"
app.use(morgan('combined')); 

const logger = winston.createLogger({
    level : 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ],
  });
   
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }
// Routers
app.get('/', (req,res)=>  res.send('Hello world'))

app.use('/restaurant', restaurantRouter);


// error 
app.use((req,res,next)=>next(createError(404)))


const PORT = process.env.PORT|| 3000;

app.listen(PORT,()=>console.log('App is running on \n http://localhost:3000/'));