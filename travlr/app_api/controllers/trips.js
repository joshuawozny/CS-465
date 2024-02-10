const mongoose = require("mongoose");
const tripsModel = mongoose.model('trips');

//GET: /trips for all trips
const tripsList = async (req, res) => {
    tripsModel
        .find({})  // empty filter for all
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "trips not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

//GET: /trips/:tripCode for a single trip 
const tripByCode = async (req, res) => {
    tripsModel
        .find({'code': req.params.tripCode})  
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "trip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
};
module.exports = {
    tripsList,
    tripByCode
};