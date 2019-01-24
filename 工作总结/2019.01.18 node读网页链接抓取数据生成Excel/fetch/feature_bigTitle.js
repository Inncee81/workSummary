var cheerio = require('cheerio')
module.exports={
    bigTitle:function(tabI,feaI,fctx,res,product){
        var $ = cheerio.load(res.text)
        product.bigTitle.push($(fctx).find('div').eq(0).attr('title'))
    }
}