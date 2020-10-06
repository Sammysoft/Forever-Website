const express = require('express');
const route = express.Router();

require('../../Models/db')

route.get('/Blog/View', (req,res,next)=>{
    Blogs.find({}, (err,docs)=>{
        res.render('Pages/ViewBlogs', {
            title: 'View Blogs',
            blogs: docs
        })
    })
})

module.exports = route;