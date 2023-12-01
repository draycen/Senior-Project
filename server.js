// run server by nodemon server.js
// ctrl c to kill
//app.use(cors())
//const cors = require('cors')
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://draycen188:keepitrealman@homestay.g82jlgb.mongodb.net/homestay") 

app.use(express.static(__dirname + '/public'));
// Submit form
// create a data schema

const contentSchema = {
    name: String,
    email: String,
    message: String
}

const User = mongoose.model("User", contentSchema); //save info into this model


app.get("/contact", function(req, res) {
    res.sendFile(__dirname + "/public/contact.html");
})

app.post("/contact", function(req, res){
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newUser.save();
    res.redirect('/contact');     
})
// Check available

const dateSchema = {
    fromdate: Date,
    todate: Date,
    adults: Number,
    children: Number,
}

const CheckDate = mongoose.model("CheckDate", dateSchema); //save info into this model


app.get("/index", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/index", function(req, res){
    let newCheckDate = new CheckDate({
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        adults: req.body.adults,
        children: req.body.children,
    });
    
    newCheckDate.save();
    res.redirect('/index');     
})
//
//app.post


app.listen(3000, function() {
    console.log("server is running on 3000");
})