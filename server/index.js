const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser')
const logger = require('morgan');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

//configs and others
const CONFIG = require('./config/config')
const UTIL = require('./utils/util')
port = CONFIG.SERVER.PORT
DB_URI  = CONFIG.SECRET.MONGO

// db connection 
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true},err=>{
    if(err){
        UTIL.log("Error Connecting Database")
    }else{
        UTIL.log("Database Connected..")
    }
});

//body parse
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//logger 
app.use(logger('combined'))

// using session 
app.use(
    session(
        {secret:CONFIG.SECRET.SESSION,resave: false,
            saveUninitialized: false,
            cookie:{maxAge:60*1000*30}
        }))


//routes 
const authRoute= require('./routes/authRoute')
app.use('/api',authRoute)


app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('worked!')
})


app.get('/visitcount', function(req, res){
    if(req.session.page_views){
       req.session.page_views++;
       res.send("You visited this page " + req.session.page_views + " times");
    } else {
       req.session.page_views = 1;
       res.send("Welcome to this page for the first time!");
    }
 });




// handle 404 error
app.use(function (req, res, next) {
    res.status(404).send('404 - Not Found!');
});

app.listen(port, '0.0.0.0',() => {
    console.log(`Example app listening on port ${port} !`);
});

//Run app, then load http://localhost:port in a browser to see the output.