const mongoose = require('mongoose');
// define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, index: true},
    name: { type: String, index: true, required:true },
    length: { type: String},
    start: { type: Date},
    resort: { type: String},
    perPerson: { type: String},
    image: { type: String},
    description: { type: String}
});

//mongoose.model('trips', tripSchema);
module.exports = mongoose.model('trips', tripSchema);