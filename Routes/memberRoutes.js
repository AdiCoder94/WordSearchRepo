var express = require('express');
var router = express.Router();

const User = require("../Models/members.model");
const UserSession = require('../Models/userSession.model');
const { compareSync } = require('bcrypt');

// creating route endpoint for signing up new users
router.post('/signup', (req, res, next) => {

    var {
        email,
        password,
        username
    } = req.body;

    if (!email) {
        return res.send({
            message: "Email cannot be blank"
        })
    } else if (!password) {
        return res.send({
            message: "Password cannot be blank"
        })
    } else if (!username) {
        return res.send({
            message: "Username cannot be blank"
        })
    }

    email = email.toLowerCase().trim();
    username = username.trim();

    User.find({
        email: email
    }, (err, docs) => {
        if (err) {
            return res.send({
                message: "Server error"
            })
        } else if (docs.length > 0) {
            return res.send({
                message: "Sorry, user already exists"
            })
        } else if (!err) {
            User.find({
                username: username,
            }, (err, docs) => {
                if (err) {
                    return res.send({
                        message: "Server error"
                    })
                } else if (docs.length > 0) {
                    return res.send({
                        message: "Sorry, username already exists"
                    })
                } else if (!err) {
                    // creating in new user document in the database
                    const newMember = new User();
                    newMember.email = email;
                    newMember.password = newMember.generateHash(password);
                    newMember.username = username;
                    newMember.save((err, user) => {
                        if (err) {
                            return res.send({
                                success: false,
                                message: err
                            });
                        }
                        return res.send({
                            success: true,
                            message: user
                        })
                    })
                }
            })
        }
    })
}
)

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
                message: "Server error"
            })
        } else if (docs.length != 1) {
            return res.send({
                message: 'Invalid'
            })
        } else {
            const user = docs[0]; 
            var compare = user.validPassword(password)
            return res.send({
                message: typeof(compare)
            })
            // if (!user.validPassword(password)){
            //     return res.send({
            //         message: typeof(user.validPassword(password))})
            // } 
            // else return res.send({
            //     message: 'gooo' })
            // const userSession = new UserSession();
            // userSession.userID = user._id;
            // userSession.save((err, docs) => {
            //     if(err){
            //         return res.send({
            //             message: err})
            //     } else
            //     return res.send({
            //         message: 'Signed in'}) 
            // })                 
        }
    })
})

module.exports = router;

// if (!user.validPassword(password)){
//     return res.send({
//         message: res })
// } else 
//     return res.send({
//         message: 'good'})                      



// return res.send({
//     message: user
// }) 