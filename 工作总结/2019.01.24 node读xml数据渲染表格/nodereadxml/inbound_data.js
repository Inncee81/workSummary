var fs = require('fs');
var allData = require('./allData.js')
module.exports={
    inbound:function(product1,smn,node){
    //    console.log(result)
        product1.inbound_.push(smn)
        product1.inbound_.push(node)
    },
    outbound_bk:function(product2,smn,node){
        // console.log(smn)
        product2.outbound_.push(smn)
        product2.outbound_.push(node)
    }
}