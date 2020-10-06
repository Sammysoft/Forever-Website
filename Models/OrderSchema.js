const mongoose = require('mongoose');
const OrderSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    GetOrder: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    OrderAt:{
        type: Date,
        required: true,
        default: Date.now
    } 
},
{
    timestamps : { currentTime: ()=> Math.floor(Date.now()/ 1000)}
})

mongoose.model('Order', OrderSchema);