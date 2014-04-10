var mongoose = require('mongoose');
var config = require('../config.json');
var schema = mongoose.Schema;
var env = process.env.NODE_ENV || 'test';

if (env === 'production') {
    config.production.username = process.env.mongouser;
    config.production.pass = process.env.mongopass;
}
mongoose.connect(config[env].hostname, config[env].database, config[env].port, config[env]);

module.exports.Listing = require('./listing');
module.exports.mongoose = mongoose;