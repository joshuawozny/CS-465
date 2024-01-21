/* use the built-in Node JS file system component with its
fs.readFileSync() method to retrieve the JSON data from rooms.json */
var fs = require('fs');
var roomTypes = JSON.parse(fs.readFileSync('./data/rooms.json',
'utf8'));

/* GET travel view */
const rooms = (req, res) => {
res.render('rooms', { title: 'Travlr Getaways', roomTypes });
};
module.exports = {
    rooms
};