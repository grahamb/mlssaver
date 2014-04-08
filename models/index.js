var mongoose = require('mongoose');
var schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mls');

module.exports.Listing = require('./listing');
module.exports.mongoose = mongoose;