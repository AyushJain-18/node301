let mongooes = require('mongoose');
const URI = "mongodb+srv://Ayush:Ayush@cluster0.oruin.mongodb.net/Node301?retryWrites=true&w=majority";

connectDB = async ()=> {
    await mongooes.connect(URI,{useUnifiedTopology: true,useNewUrlParser: true });
    console.log('db Connected');
};

module.exports = connectDB;