var csv = require('csv');
var fs = require('fs');
var argv = require('yargs').argv;
var path = require('path');
var Listing = require('../models').Listing;
var numrecords;
var counter = 0;
if (!argv.file) {
    console.error('No filename provided. Pass a .csv file in the --file option');
    process.exit(1);
}

var inputFile = path.resolve(argv.file)

function createListing(data) {
    data.date_added = new Date();
    Listing.findOneAndUpdate({ listing_id: data.listing_id }, data, { upsert: true }, function(err, doc) {
        if (err) {
            console.warn(error);
        } else {
            console.log('Added/Updated %s', doc.listing_id);
        }
        counter++;
        if (counter === numrecords) { process.exit(); }
    });
}



csv()
 .from.stream(fs.createReadStream(inputFile), {columns: true})
 .on('record', function(row, index) {
    createListing(row);
 })
 .on('end', function(count){
   numrecords = count;
 })
 .on('error', function(error){
   console.log(error.message);
 });

