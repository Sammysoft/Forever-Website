const mongoose = require('mongoose');
const BlogSchema = mongoose.Schema({
    imageUrl:{
        type:String
    },
    Title: {
        type:String,
        required: true
    },
    subTitle:{
        type: String,
        required: true
    },
    blogBody:{
        type: String,
        required: true
    }
})

 mongoose.model('Blog', BlogSchema);