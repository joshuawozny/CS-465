/* GET travel view */
const rooms = (req, res) => {
res.render('rooms', { title: 'Travlr Getaways', activePage: 'rooms'  });
};
module.exports = {
    rooms
};