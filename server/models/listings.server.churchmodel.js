
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var churchSchema = new Schema({
    
    // May want to update required parts of listing
    name: {type: String, required: true},
    pastor: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    denomination: {type: String, required: true},
    missionStatement: {type: String, required: true},
    description: String
});

var ChurchListing = mongoose.model('ChurchListing', churchSchema);

// Exports model
module.exports = ChurchListing;