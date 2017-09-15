var https = require('https');

var optionsget = {
    host : 'st1-fasttrackapi.ttlnonprod.com', // here only the domain name
    port : 443,
    headers: {'TocIdentifier': 'VTMobileWeb'},
    path : '/v1/Search?Origin=EDB&Destination=ABD&NumberOfAdults=1&NumberOfChildren=0&OutboundDate=2017-09-20&OutboundTime=&IsReturn=false&ReturnDate=2017-09-20&ReturnTime=20-29', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');

// do the GET request
var reqGet = https.request(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
  
    res.on('data', function(d) {
        console.info('GET result after call ::\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });
 
});
 
reqGet.end();
reqGet.on('error', function(e) {
    console.info('Error occured');
    console.error(e);
});


