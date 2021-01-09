const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db-config.js");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const User = require("./db-models/user");
const Booking = require('./db-models/booking');
const ToursInfo = require('./db-models/toursInfo');
const mongoose = require("mongoose");

const saltRounds = 10;

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/signup", (req, res) => {
    const {userName, email, password} = req.body;
    User.findOne({email: email}).exec((err, user) => {
        if (user) {
            res.send({error: "The user already exists"});
        } else {
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    const newUser = new User({
                        userName: userName,
                        email: email,
                        password: hash,
                    });
                    newUser
                        .save()
                        .then((user) => {
                            const token = jwt.sign({id: user._id}, "secretKey", {
                                expiresIn: 86400, // expires in 24 hours
                            });
                            res.status(200).send({auth: true, token: token});
                        })
                        .catch((error) => {
                            res.status(500).send();
                        });
                });
            });
        }
    });
});

app.post("/signIn", (req, res) => {
    const {userName, password} = req.body;
    User.findOne({userName: userName}).exec((err, user) => {
        if (user) {
            bcrypt.compare(password, user.password, function (err, isPasswordMatched) {
                if (isPasswordMatched) {
                    const token = jwt.sign({id: user._id}, "secretKey", {
                        expiresIn: 86400, // expires in 24 hours
                    });
                    res.status(200).send({auth: true, token: token});
                } else {
                    res.send({error: "No such user exists"});
                }
            });
        } else {
            res.send({error: "No such user exists"});
        }
    });
});

app.post('/bookTour', (req, res) => {
    const {userName, adults, children, charges} = req.body;
    const booking = new Booking({
        userName, adults, children, charges
    });
    booking.save().then(response => {
        res.status(200).send();
    }).catch(error => {
        res.status(500).send();
    })
});

app.get('/toursInfo', (req, res) => {
    ToursInfo.find({}).exec((error, toursInfo) => {
        if(error){
            res.status(404).send();
        }else{
            res.send(toursInfo);
        }
    });
});

app.listen(process.env.PORT || 8080, () => {
    console.log("listening on port 8080");
});
