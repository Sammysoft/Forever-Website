const express = require('express');
const App = express();
const hbs = require('express-handlebars');
const path = require('path')
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
App.use(express.static('public'));

const port = process.env.PORT || 80
App.listen(port, '0.0.0.0', ()=>{
    console.log(`Server running at port ${port}` )
});


//Setting middleware for views engine
App.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'MainLayout', layoutsdir: __dirname + '/views/layouts/'}));
App.set('views', path.join(__dirname + '/views/'));
App.set('view engine', 'hbs');


//setting middleware for bodyParser
App.use(bodyParser());
App.use(bodyParser.urlencoded({
    extended: true
}))
App.use(bodyParser.json());




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


//Importing Database connection & Schemmas
require('./Models/db')
// require('./Models/OrderSchema')
// require('./Models/BlogSchema')

//Imported Routes

const Home = require('./Routes/Pages/Home')
const Blog = require('./Routes/Blogs/Create-blog')

App.use('/', Home);
App.use('/', Blog);


