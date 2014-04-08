var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListingSchema = new Schema({
    listing_id: {type: String, unique: true, required: true },
    listing_url: String,
    address: String,
    price: String,
    bathrooms: String,
    bedrooms: String,
    image_url: String,
    rating_location: Number,
    rating_size: Number,
    rating_look: Number,
    rating_yard: Number,
    rating_kitchen: Number,
    rating_affordability: Number,
    rating_suite: Number,
    rating_floors: Number,
    comments_graham: String,
    comments_eryn: String,
    date_added: Date
});

mongoose.model('listings', ListingSchema);
var ListingsModel = mongoose.model('listings');

module.exports = ListingsModel;