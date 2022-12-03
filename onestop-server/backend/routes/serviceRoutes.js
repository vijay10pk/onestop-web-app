const express = require('express');
const router = express.Router();
const serviceModel = require('../models/serviceModal')

router.get('/setupDB', (req, res, next) => {
    serviceModel.setupDB().then( response =>{
        if(response) res.json(response)
    }).catch( error =>{
       next(error);
    })
})

router.get('/category/:category', (req, res, next) => {
    let category=req.params.category;
    console.log(category)
    serviceModel.getCategory(category).then( response =>{
        console.log(response[0]["sub_category"])
        if(response) res.json(response)
    }).catch( error =>{
       next(error);
    })
})

router.get('/search/:search', (req, res, next) => {
    let search=req.params.search;
    console.log(search)
    serviceModel.getSearch(search).then( response =>{
        if(response) res.json(response)
    }).catch( error =>{
       next(error);
    })
})

module.exports = router