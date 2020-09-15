var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var base64 = require('base64url')

const User = require("../Models/members.model");
const UserSession = require('../Models/userSession.model');

const accessTokenSecret = require('../config/constants').accessTokenSecret;
var authenticateUser = require('../config/middlewares').authenticateJWT


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

    async function setAuthHeader(token){
        if(req.headers.authorization === '' || req.headers.authorization === undefined){
            req.headers.authorization = token }}

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
                message: 'Not signed up' })
        } else {
            const user = docs[0]

            async function matchPassword(){
                let compare = await user.validPassword(password)
                return compare }

            async function setAccessToken(){
                const accessToken = await jwt.sign({ user: user._id }, accessTokenSecret, { expiresIn: 3600 })
                return accessToken }    

            matchPassword()
            .then(result => {
                if(result){
                    setAccessToken()
                    .then(token => {
                        let userSession = new UserSession()
                        userSession.userID = token
                        setAuthHeader(token)
                        .then(() => {
                            const signedToken = req.headers.authorization
                            const signedToken_payload = signedToken.split('.')
                            const currentUserString = base64.decode(signedToken_payload[1])
                            const currentUserObj = JSON.parse(currentUserString)
                            userSession.currentUser = currentUserObj.user
                            userSession.save()
                            .then((docs, err) => {
                                if(docs){ 
                                    return res.send({ 
                                        message: 'signed in',
                                        token: signedToken,
                                        user: currentUserObj.user,
                                        success: true
                                    })
                                
                                }
                                else return res.send({
                                    err: err ,
                                    success: false })})
                        })
                    }
                )}                
                else return res.send({ message: 'wrong password'})})
            .catch(err => console.log(err))
        }
    })
})

// creating route endpoints for logging out members
router.post('/signout', authenticateUser, (req, res, next) => {

    let userToken = req.header('Authorization').split(' ')[1]  

    UserSession.findOneAndUpdate(
        { userID: userToken, isDeleted: false }, 
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