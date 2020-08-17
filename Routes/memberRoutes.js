var express = require('express');
var router = express.Router();

const User = require("../Models/members.model");
const UserSession = require('../Models/userSession.model');

// creating route endpoint for signing up new users
router.post('/signup', (req, res, next) => {

    var {
        email,
        password,
        username
    } = req.body;

    if (!email) {
        return res.send({
            message: "Email cannot be blank" })
    } else if (!password) {
        return res.send({
            message: "Password cannot be blank" })
    } else if (!username) {
        return res.send({
            message: "Username cannot be blank" })}

    email = email.toLowerCase().trim();
    username = username.trim();

    User.find({
        email: email
    }, (err, docs) => {
        if (err) {
            return res.send({
                err_msg: "Server error"
            })
        } else if (docs.length > 0) {
            return res.send({
                err_msg: "Sorry, user already exists"
            })
        } else if (!err) {
            User.find({
                username: username,
            }, (err, docs) => {
                if (err) {
                    return res.send({
                        err_msg: "Server error"
                    })
                } else if (docs.length > 0) {
                    return res.send({
                        err_msg: "Sorry, username already exists"
                    })
                } else if (!err) {
                    // creating in new user document in the database
                    async function createUser(){
                        const newMember = new User()
                        newMember.password = await newMember.generateHash(password)
                        newMember.email = email
                        newMember.username = username
                        return newMember
                    }
                    createUser()
                    .then((json) => User.create(json, (err, doc) => {
                        if(err){
                            return res.send({
                                success: false,
                                err_msg: err })}
                        else return res.send({
                            success: true,
                            user: doc })}))
                    .catch(err => res.send({err_msg: err}))
                }
            })
        }
    })
})

// creating route endpoints for logging in members
router.post('/signin', (req, res, next) => {
    var {
        email,
        password
    } = req.body;

    if (!password) {
        return res.send({
            message: "Password cannot be blank" })
    } else if (!email) {
        return res.send({
            message: "Email cannot be blank" })}

    email = email.trim();

    User.find({
        email: email
    }, (err, docs) => {
        if (err) {
            return res.send({
                message: "Server error" })
        } else if (docs.length != 1) {
            return res.send({
                message: 'not signed up' })
        } else {
            const user = docs[0]

            async function matchPassword(){
                let compare = await user.validPassword(password)
                return compare }

            matchPassword()
            .then((result) => {
                if(result){
                    let userSession = new UserSession()
                    userSession.userID = user._id
                    userSession.save()
                    .then((docs, err) => {
                        if(docs){
                            return res.send({
                                message: 'signed in',
                                token: docs._id,  
                                success: true })}
                        else return res.send({
                            err: err ,
                            success: false })})
                    .catch(err => console.log('err', err))
                } else return res.send({ message: 'wrong password'})})
            .catch(err => console.log(err))
        }
    })
})

// creating route endpoints for logging out members
router.post('/signout', (req, res, next) => {
    // getting the token by sending query parameters
    var token  = req.header('Autherization')
    
    UserSession.findOneAndUpdate(
        { _id: token, isDeleted: false }, 
        { $set: { isDeleted: true } },
        { new: true },
        (err, docs) => {
            if(err){
                return res.send({
                    err: err,
                    success: false })
            }else UserSession.deleteOne({_id: docs._id}, (err, status) => {
                    if(err){
                        return res.send({ 
                            success: false,
                            err_msg: err })}
                    else return res.send({
                        success: true,
                        deleteStatus: 'session expired'
                    })
                })                
        }) 
})

module.exports = router;
