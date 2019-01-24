var cheerio = require('cheerio')

module.exports={
    fTitle:function(tabI,feaI,fctx,res,product){
        var $ = cheerio.load(res.text)
        var feature = {
            fTitle:[]
        }
        var arr = []
        arr.push(tabI)
        arr.push(feaI)
        var brr = []
        if($(fctx).find('.container .header1').text()){
            brr.push($(fctx).find('.container .header1').text().replace(/[\r\n]/g, ""))
            arr.push(brr)
        }
        if($(fctx).find('.container .header3').text()){
            $(fctx).find('.container .header3').each(function(i,e){
                brr.push($(e).text().replace(/[\r\n]/g, ""))
            })
            arr.push(brr)
        }
        // console.log(arr)
        // arr.push($(fctx).find('div').eq(0).attr('class'))
        product.feature.fTitle.push(arr)
    }
}