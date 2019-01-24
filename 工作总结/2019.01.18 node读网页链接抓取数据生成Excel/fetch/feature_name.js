var cheerio = require('cheerio')
var layout = require('./feature_layout.js')
module.exports={
    name:function(tabI,feaI,fctx,res,product){
        var $ = cheerio.load(res.text)
        // console.log(tabI,feaI,$(fctx).find('div').eq(0).attr('class'))
        var arr = []
        var brr = []
        arr.push(tabI)
        arr.push(feaI)
        arr.push($(fctx).find('div').eq(0).attr('class'))
        brr.push(arr)
        var frr = []
        var err = []
        if($(fctx).find('.container .header1 span').attr('style')){
            err.push($(fctx).find('.container .header1 span').attr('style').replace(/\s*/g,""))
            arr.push(err)
        }else{
            err.push('')
            arr.push(err)
        }
        layout.layout(brr,res,product)
    }
}