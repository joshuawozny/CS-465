/* GET travel view */
const news = (req, res) => {
res.render('news', { title: 'Travlr Getaways', activePage: 'news'  });
};
module.exports = {
    news
};