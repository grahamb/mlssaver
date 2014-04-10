var Listing = require('../models').Listing;

/*
 * GET home page.
 */

exports.index = function(req, res){
    Listing.find({}, function(err, listings) {
            if (err) {
                res.render('error', { error: err });
                console.log(err);
            } else {
                res.render('index', {listings: listings});
            }
        });
};

/*
* GET form.
*/

exports.form = function(req, res){
    res.render('form', { creating: true, title: 'Save Listing', data: req.query });
};

/*
* GET saved.
*/

exports.saved = function(req, res){
    res.render('saved', { data: req.query });
};

/*
* POST listing.
*/
exports.post_listing = function(req, res) {
    var listing = new Listing(req.body);
    listing.save(function(err) {
        if (err) {
            res.render('error', { error: err });
            console.log(err);
        } else {
            res.redirect('/saved');
        }
    });
};

/*
* GET listing.
*/
exports.get_listing = function(req, res) {
    Listing.findOne({ listing_id: req.param('id') }, function(err, listing) {
        if (err) {
            res.render('error', { error: err });
            console.log(err);
        } else {
            if (!listing) {
                res.send(404);
            } else {
                res.render('form', { creating: false, title: 'View Listing', data: listing });
            }
        }
    });
};
