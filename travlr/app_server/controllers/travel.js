/* use the built-in Node JS file system component with its
fs.readFileSync() method to retrieve the JSON data from trips.json 
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json',
'utf8'));
*/

//Using requests instead of a data file
const request = require('request');
const apiOptions = {
    server:'http://localhost:3000'
}

// Method to render the list view
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTite = process.env.npm_package_description + ' - Trave';

    if(!(responseBody instanceof Array)){
        message = 'API lookup error';
        responseBody = [];
    } else{
        if(!responseBody.length){
            message = 'No trips exist in database!';
        }
    }

    res.render('travel',{
        title: pageTite,
        trips: responseBody,
        message
    });
};

/* GET travel view  OLD
const travel = (req, res) => {
res.render('travel', { title: 'Travlr Getaways', trips });
};
*/

//Updated GET method
const travelList = (req, res)=>{
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json:{},
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if(err){
                console.error(err);
            }
            renderTravelList(req, res, body);
        }

    )
}


module.exports = {
    travelList
};