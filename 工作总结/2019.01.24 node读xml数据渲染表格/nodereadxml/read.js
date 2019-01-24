var fs = require('fs'),
    xml2js = require('xml2js');
 
var parser = new xml2js.Parser();
var arr = ['']
fs.readFile('./dist/DC-FT7GA_id_id.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.log(result.ItemContents.ItemContent[0].data[0]._);
        console.log('Done');
    });
});