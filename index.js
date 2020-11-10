const express       = require('express');
const app           = express();
const connectDB     = require('./db/connection');
const restaurantRouter =  require('./routes/restaurantRouter');


app.get('/', (req,res)=>{
    res.send('Hello world');
})

connectDB();
app.use('/restaurant', restaurantRouter);
const PORT = process.env.PORT|| 3000;

app.listen(PORT,()=>console.log('App is running on \n http://localhost:3000/'));