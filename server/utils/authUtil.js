const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const {CustomError} = require('../utils/customError')

const CONFIG = require('../config/config')
const RESPONSE_CODE = CONFIG.RESPONSE_CODE;
const SALT = CONFIG.SECRET.SALT

module.exports.registerUser = (username, password) => {
    return userModel.find({
        'username': username
    }).then((docs) => {
        if (docs.length === 0) {
            return generateHash(password)
        } else {
            throw new CustomError(RESPONSE_CODE.userAleradyExist)
        }
    }).then(hash=>{
        var newUser =  new userModel({
            'username':username,
            'password':hash
        })
        return newUser.save()
    })
}


module.exports.authenticate = (username,password)=>{
    return userModel.findOne({
        'username': username,
    }).then((doc) => {
        console.log(doc)
        if (!doc) {
            throw new CustomError(RESPONSE_CODE.userNotExist)
        } else{
            return matchHash(password,doc)
        }
    })
}


generateHash = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, SALT, (err, hash) => {
            if (err) {
                reject(RESPONSE_CODE.hashGenError)
            } else {
                resolve(hash)
            }
        })
    })
}

matchHash = (password,doc)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.compare(password, doc.password, function(err, result) {
            if(err){
                reject(new CustomError(RESPONSE_CODE.unknownError))
            }else{
                if(result){
                    resolve(doc)
                }else{
                    reject(new CustomError(RESPONSE_CODE.passwordWrong))
                }
            }
        });
    })
}