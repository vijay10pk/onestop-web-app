const express = require('express');
const router = express.Router();
const userObj = require('../config/userObj')
const userModel = require('../models/userModel')

router.post('/login', (req,res,next)=>{
    var userName= req.body.userName;
    var password=req.body.password;
    return userModel.loginUser(userName,password).then(userData => {
        res.json(userData);
    }).catch(err => {
        // res.status(400).send(err.message)
        next(err);
    });
});

router.post('/register', (req,res,next)=>{
    
    const registerData=new userObj(req.body);
    console.log(registerData)
    return userModel.RegisterUser(registerData).then(userData => {
        res.json(userData);
    }).catch(err => {
        // res.status(400).send(err.message)
        next(err);
    });
});

module.exports = router