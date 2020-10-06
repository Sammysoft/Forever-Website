const express = require('express');
const App = express();
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');





//Express session

App.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

//connect flash
App.use(flash());
//Global Vars
App.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.success = req.flash('success');
    next();
})


const Blog = express.Router();
require('../../Models/BlogSchema');
require('../../Models/db');
const Blogs = mongoose.model('Blog');

Blog.get('/Blogs/Create', (req,res,next)=>{
    Blogs.find({}, (err,docs)=>{
        res.render('Blogs/Create-blog', {
            Blogs: docs,
            title: 'Create you blog'
        })
    })
    
})


Blog.post('/Blogs/Create-blog', (req,res,next)=>{
    const { imageUrl, subTitle, Title, blogBody } = req.body;
    if(!imageUrl || !subTitle || !Title || !blogBody){
        req.flash('error', 'Please Ensure you add all fields..');
        res.render('Blogs/Create-blog', {
        imageUrl : imageUrl,
        subTitle : subTitle,
        Title : Title,
        blogBody : blogBody,
        });
    }else{
    const blog = new Blogs();
    blog.imageUrl = imageUrl;
    blog.subTitle = subTitle;
    blog.Title = Title;
    blog.blogBody = blogBody;
    blog.save();
    req.flash('success', 'Blog Created Succesfully')
    res.redirect('/Blogs/create')
    }
    
})
module.exports = Blog