const express = require('express');
const router = express.Router();
const authUtil = require('../utils/authUtil')

const CONFIG = require('../config/config')
const RESPONSE_CODE = CONFIG.RESPONSE_CODE;
const {CustomError} = require('../utils/customError')

router.post('/register', (req, res) => {
    console.log(req.body)
    username = req.body.username;
    password = req.body.password;
    authUtil.registerUser(username, password).then(user => {
        if (user) {
            res.status(RESPONSE_CODE.userRegisterdSuccess.code)
                .json(RESPONSE_CODE.userRegisterdSuccess)
        } else {
            res.status(RESPONSE_CODE.unknownError.code)
                .json(RESPONSE_CODE.unknownError)
        }
    }).catch(err => {
        // console.log(err.code)
        if (err instanceof CustomError) {
            res.status(err.code)
                .json(err.json)
        } else {
            res.status(RESPONSE_CODE.unknownError.code)
                .json(RESPONSE_CODE.unknownError)
        }
    })
});

router.post('/login', (req, res) => {
    console.log(req.body)
    username = req.body.username;
    password = req.body.password;

    authUtil.authenticate(username,password).then(doc=>{
        //  console.log(doc)
        
        req.session.cookie.username = username;
        req.session.cookie.role = doc.role;
        console.log(req.session)
        res.status(RESPONSE_CODE.loginSuccess.code)
        .json(RESPONSE_CODE.loginSuccess)

    }).catch(err=>{
        if (err instanceof CustomError) {
            res.status(err.code)
                .json(err.json)
        } else {
            res.status(RESPONSE_CODE.unknownError.code)
                .json(RESPONSE_CODE.unknownError)
        }
    })
});
module.exports = router