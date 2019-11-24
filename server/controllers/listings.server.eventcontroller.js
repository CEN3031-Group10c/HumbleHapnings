var mongoose = require('mongoose')
var eventListing = require('../models/listings.server.events.js')


// Function to create a event listing in the database
exports.createEvent = function(req,res) {

    var eventData = {
        name: req.body.name,
        date: req.body.date,
        location: req.body.location,
        description: req.body.description,
        hostChurch: req.body.hostChurch,
        tags: req.body.tags
    };

    var eventListing = new EventListing(eventData);

    // Saves the listing
    eventListing.save(function(err) {
        if(err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(eventListing);
            console.log(eventListing)
        }
    });
};


// Function to read the listing
exports.readEvent = function(req,res) {
    res.json(req.eventListing);
};

// Function to update the event listing
exports.updateEvent = function(req, res) {
    var eventListing = req.eventListing;

    // query based on listing name
    var query = {name: eventListing.name};

    eventListing.name = req.body.name;
    eventListing.date = req.body.date;
    eventListing.location = req.body.location;
    eventListing.description = req.body.description;
    eventListing.hostChurch = req.body.hostChurch;
    eventListing.tags = req.body.tags;

    EventListing.findOneAndUpdate(query, eventListing, function(err) {
        if(err) {
            console.log(err);
            res.status(400).send(err)
        } else {
            res.json(listing);
            console.log(listing);
        }
    });
};

// Deletes an event from the directory
exports.deleteEvent = function(req, res) {
    var eventListing = req.eventListing;

    // query based on listing name
    var query2 = {name: eventListing.name};

    EventListing.findOneAndDelete(query2, function(err) {
        if (err) throw err;
        res.send({message: "Deleted"});
    });
};


// Retrieves all the event listings in the directories
exports.listEvent = function(req, res) {
    EventListing.find({}, function(err, foundListings) {
        if (err) throw err;

        res.send(foundListings)
    });
};

// Middleware, finds listing by id  then passes it to next request handler
exports.eventListingByID = function(req, res, next, id) {
    EventListing.findById(id).exec(function(err, listing) {
        if(err) {
            res.status(400).send(err);
        } else {
            req.eventListing = listing;
            next();
        }
    });
};
