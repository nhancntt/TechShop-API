const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const db = () => {
    mongoose.connect('mongodb+srv://buiminhnhan2k:ailopdiu1996@cluster0.qvaxeak.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    return mongoose; 
};
module.exports = db;