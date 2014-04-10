var mongoose = require('mongoose');
var schema = mongoose.Schema;
var env = process.env.NODE_ENV || 'test';

var mongourl = process.env.NODE_ENV === 'production' ? process.env.mongourl : 'mongodb://localhost/mls';
mongoose.connect(mongourl);

module.exports.Listing = require('./listing');
module.exports.mongoose = mongoose;