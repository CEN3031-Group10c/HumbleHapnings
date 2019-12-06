var mongoose = require('mongoose')

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/prod");
// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
// Load User model
const User = require("../models/User");
//User type constants
const UNAPPROVED_CHURCH_LEADER = "UNAPPROVED CHURCH LEADER";
const UNAPPROVED_ADMIN = "UNAPPROVED ADMIN";
const NORMAL = "NORMAL";
const CHURCH_LEADER = "CHURCH LEADER";
const ADMIN = "ADMIN";

// @route POST api/users/register
// @desc Register user
// @access Public
exports.register = function(req, res) {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    // If valid input, use MongoDB’s User.findOne() to see if the user exists
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            // If user is a new user, fill in the fields (name, email, password) with data sent in the body of the request
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                userType: req.body.userType
            });
        // Use bcryptjs to hash the password before storing it in your database
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
        });
      }
    });
};


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
exports.login = function(req, res) {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    console.log("No login errors")
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name,
                    userType: user.userType
                };
                // Sign token
                jwt.sign(
                    payload,
                    config.db.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                    });
                });
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
};

//Gets all the unapproved accounts
exports.AccountApproval = function(req, res) {
    User.find({"$or" : [
        {userType : UNAPPROVED_ADMIN}, 
        {userType : UNAPPROVED_CHURCH_LEADER}
    ]}, function(err, foundUsers) {
        if (err) throw err;

        res.send(foundUsers);
    });

};

exports.UpdateUserType = function(req, res) {
    var userData = req.body.userData;
    var approved = req.body.approved;
    var userTypeValue = NORMAL;
    if (approved)
    {
        if (userData.userType === UNAPPROVED_ADMIN)
        {
            userTypeValue = ADMIN;
        }
        else if (userData.userType == UNAPPROVED_CHURCH_LEADER)
        {
            userTypeValue = CHURCH_LEADER;
        }
    }
    var query = {email: userData.email};
    User.findOneAndUpdate(query, {userType: userTypeValue}, function(err) {
        if (err) throw err;
        res.send({message: "Deleted"});
    });
};

// Retrieves all the event listings in the directories
exports.listUsers = function(req, res) {
    User.find({}, function(err, foundListings) {
        if (err) throw err;
        res.send(foundListings)
    });
};

exports.userListingByID = function(req, res, next, id) {
    User.findById(id).exec(function(err, listing) {
        if(err) {
            res.status(400).send(err);
        } else {
            req.userListing = listing;
            next();
        }
    });
};
