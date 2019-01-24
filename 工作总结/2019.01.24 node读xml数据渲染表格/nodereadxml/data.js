var inbound = require('./inbound_data.js')
var outbound_bk = require('./inbound_data.js')
module.exports={
    data1:function(product1,res,result){
        // console.log(result.ItemContents.ItemContent[0].data[0]._)
        var node = []
        var smn = []
        smn.push(result.ItemContents.ItemContent[0].data[0]._)
        for(var i = 0;i < res.length;i++){
            if(res[i].$.nodeName == 'TechnicalFeature'){
                node.push(res[i])
            }
        }
        inbound.inbound(product1,smn,node)
    },
    data2:function(product2,res,result){
        var node = []
        var smn = []
        smn.push(result.ItemContents.ItemContent[0].data[0]._)
        for(var i = 0;i < res.length;i++){
            if(res[i].$.nodeName == 'TechnicalFeature'){
                node.push(res[i])
            }
        }
        outbound_bk.outbound_bk(product2,smn,node)
    }
}