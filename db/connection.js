
let mongooes = require('mongoose');

const URI = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@${process.env.DB_Cluster}.oruin.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`;

const connectDB = async ()=> {
    await mongooes.connect(URI,{useUnifiedTopology: true,useNewUrlParser: true });
    console.log('db Connected');
};

module.exports = connectDB;
