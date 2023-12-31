/* GET travel view */
const travel = (req, res) => {
res.render('travel', { title: 'Travlr Getaways', activePage: 'travel' });
};
module.exports = {
    travel
};