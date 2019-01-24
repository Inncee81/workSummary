var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();var superagent = require('superagent')
var async = require('async')
var data1 = require('./data.js')
var data2 = require('./data.js')
module.exports={
    above1:function(product1,result){
        data1.data1(product1,result.ItemContents.ItemContent[0].dataGroup,result)
    },
    above2:function(product2,result){
        data2.data2(product2,result.ItemContents.ItemContent[0].dataGroup,result)
    }
}