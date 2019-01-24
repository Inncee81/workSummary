var cheerio = require('cheerio')
module.exports={
    fcontent:function(tabI,feaI,fctx,res,product){
        var $ = cheerio.load(res.text)
        // console.log(tabI,feaI,$(fctx).find('.slide-cont .container .bodycopy1').text(),$(fctx).find('div').eq(0).attr('class'))
        var arr = []
        arr.push(tabI)
        arr.push(feaI)
        var brr = []
        var content = []
        $(fctx).find('.container .col').each(function(i,e){
            brr.push($(e).find('.bodycopy1').text().replace(/[\r\n]/g, ""))
        })
        content.push(brr)
        var s_title = []
        var z = []
        $(fctx).find('.container .col').each(function(i,e){
            z.push($(e).find('.bodycopy1 span').text())
        })
        s_title.push(z)
        var crr = []
        var frr = []
        for(var i = 0;i < content[0].length;i++){
            crr.push(content[0][i].replace(s_title[i],`${s_title[i]}`+'\r\n'))
        }
        arr.push(crr)
        // arr.push($(fctx).find('.slide-cont .container .bodycopy1').text())
        // arr.push($(fctx).find('div').eq(0).attr('class'))
        product.feature.fcontent.push(arr)
    }
}