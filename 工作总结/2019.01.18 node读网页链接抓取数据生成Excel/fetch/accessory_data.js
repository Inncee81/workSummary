var cheerio = require('cheerio')
module.exports={
    accgroup:function(acc,res,product){
        var $ = cheerio.load(res.text)
        if(acc){
            $('.accessorysection nav li').each(function(idx1,ele1){
                product.AccGroup.push($(ele1).find('span').text())
            })
        }
    }
}