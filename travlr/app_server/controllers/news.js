/* use the built-in Node JS file system component with its
fs.readFileSync() method to retrieve the JSON data from news.json */
var fs = require('fs');
var newsArticles = JSON.parse(fs.readFileSync('./data/news.json',
'utf8'));

/* GET travel view */
const news = (req, res) => {
res.render('news', { title: 'Travlr Getaways', newsArticles  });
};
module.exports = {
    news
};