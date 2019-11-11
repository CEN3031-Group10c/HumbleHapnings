var mongoose = require('mongoose')
var ChurchListing = require('../models/listings.server.churchmodel.js')


// Function to create a church listing in the database
exports.createChurch = function(req,res) {

    var churchData = {
        name: req.body.name,
        pastor: req.body.pastor,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        description: req.body.description
    };

    var churchListing = new ChurchListing(churchData);

    // Saves the listing
    churchListing.save(function(err) {
        if(err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(churchListing);
            console.log(churchListing)
        }
    });
};


// Function to read the listing
exports.readChurch = function(req,res) {
    res.json(req.churchListing);
};

// Function to update the church listing
exports.updateChurch = function(req, res) {
    var churchListing = req.churchListing;

    // query based on listing email
    var query = {email: churchListing.email};

    churchListing.name = req.body.name;
    churchListing.pastor = req.body.pastor;
    churchListing.address = req.body.address;
    churchListing.email = req.body.email;
    churchListing.phone = req.body.phone;
    churchListing.description = req.body.description;

    ChurchListing.findOneAndUpdate(query, churchListing, function(err) {
        if(err) {
            console.log(err);
            res.status(400).send(err)
        } else {
            res.json(listing);
            console.log(listing);
        }
    });
};

// Deletes a church from the directory
exports.deleteChurch = function(req, res) {
    var churchListing = req.churchListing;

    // query based on listing email
    var query2 = {email: churchListing.email};

    ChurchListing.findOneAndDelete(query2, function(err) {
        if (err) throw err;
        res.send({message: "Deleted"});
    });
};


// Retrieves all the church listings in the directories
exports.listChurch = function(req, res) {
    ChurchListing.find({}, function(err, foundListings) {
        if (err) throw err;

        res.send(foundListings)
    });
};

// Middleware, finds listing by id  then passes it to next request handler
exports.churchListingByID = function(req, res, next, id) {
    ChurchListing.findById(id).exec(function(err, listing) {
        if(err) {
            res.status(400).send(err);
        } else {
            req.churchListing = listing;
            next();
        }
    });
};
