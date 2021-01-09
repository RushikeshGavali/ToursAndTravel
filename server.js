const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const db = require("./db-config.js");
const jwt = require('jsonwebtoken');
const User = require('./db-models/user');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.post('/signup', (req, res) => {
    const {userName, email, password} = req.body;
    User.findOne({email: email}).exec((err, user) => {
        if (user) {
            res.send({error: "The user already exists"});
        } else {
            const newUser = new User({
                userName: userName,
                email: email,
                password: password
            });
            newUser.save().then(user => {
                const token = jwt.sign({id: user._id}, 'secretKey', {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(200).send({auth: true, token: token});
            }).catch(error => {
                res.status(500).send();
            });
        }
    })
});

app.post('/signIn', (req, res) => {
    const {userName, password} = req.body;
    User.findOne({ userName:userName }).exec((err, user) => {
        if(user && user.password === password){
            const token = jwt.sign({id: user._id}, 'secretKey', {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({auth: true, token: token});
        }else{
            res.send({error: "No such user exists"});
        }
    })

})

app.listen(process.env.PORT || 8080, () => {
    console.log("listening on port 8080");
});
