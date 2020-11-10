let mongooes = require('mongoose');
const URI = "mongodb+srv://Ayush:Ayush@cluster0.oruin.mongodb.net/<dbname>?retryWrites=true&w=majority";

connectDB = async ()=> {
    await mongooes.connect(URI,{useUnifiedTopology: true,useNewUrlParser: true });
    console.log('db Connected');
};

module.exports = connectDB;