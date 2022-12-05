const express = require('express');
const router = express.Router();
const userObj = require('../config/userObj')
const profObj = require('../config/profObj')
const userModel = require('../models/userModel')

router.post('/login', (req,res,next)=>{
    var email= req.body.email;
    var password=req.body.password;
    return userModel.loginUser(email,password).then(userData => {
        res.json(userData);
    }).catch(err => {
        res.status(400).send(err.message)
        next(err);
    });
});

router.post('/register', (req,res,next)=>{
    const registerData=new userObj(req.body);
    return userModel.RegisterUser(registerData).then(userData => {
        res.json(userData);
    }).catch(err => {
        res.status(400).send(err.message)
        next(err);
    });
});

router.post('/profregister', (req,res,next)=>{
    const registerData=new profObj(req.body);
    return userModel.ProfessionalUser(registerData).then(userData => {
        res.json(userData);
    }).catch(err => {
        res.status(400).send(err.message)
        next(err);
    });
});

module.exports = router