const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://Timilehin:tiMole31@forever.t6mgr.mongodb.net/Forever?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI,{useNewUrlParser: true}, function(err, result){
    if(err){
        console.log('Could not connect to DataBase' + err)
    }else{
        console.log('Connected to DataBase')
    }
})

require('./BlogSchema');
require('./OrderSchema');