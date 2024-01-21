/* use the built-in Node JS file system component with its
fs.readFileSync() method to retrieve the JSON data from trips.json */
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json',
'utf8'));


/* GET travel view */
const travel = (req, res) => {
res.render('travel', { title: 'Travlr Getaways', trips });
};
module.exports = {
    travel
};