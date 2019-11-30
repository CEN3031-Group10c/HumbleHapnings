var mongoose = require('mongoose'),
Schema = mongoose.Schema;

const eventSchema = new Schema({
    // May want to update required parts of listing
    name: {type: String, required: true},
    date: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    hostChurch: {type: String, required: true},
    tags: [{type: String}]
})

var eventListing = mongoose.model('EventListing', eventSchema);

// Exports model
module.exports = eventListing;