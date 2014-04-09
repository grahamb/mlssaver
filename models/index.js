var mongoose = require('mongoose');
var schema = mongoose.Schema;

var mongouser = process.env.mongouser;
var mongopass = process.env.mongopass;
var mongourl = 'mongodb://' + mongouser + ':' + mongopass + '@oceanic.mongohq.com:10018/mls'
mongoose.connect(mongourl);

module.exports.Listing = require('./listing');
module.exports.mongoose = mongoose;