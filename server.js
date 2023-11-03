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

// create a data schema

const contentSchema = {
    name: String,
    email: String,
    message: String
}

const User = mongoose.model("User", contentSchema); //save info into this model


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/contact.html");
})
//app.get('/', (req, res) => {       
//    res.sendFile('index.html', {root: __dirname});  
//});

app.post("/", function(req, res){
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newUser.save();
    res.redirect('/');     
})

//jajaa
//app.post

app.listen(3000, function() {
    console.log("server is running on 3000");
})