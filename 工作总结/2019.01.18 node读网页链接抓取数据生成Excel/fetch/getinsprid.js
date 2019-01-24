var cheerio = require('cheerio')
module.exports={
    getins:function(get,res,product){
        var $ = cheerio.load(res.text)
        if(get){
            // console.log($('.getinspiredsection').parent().attr('class'))
            if($('.getinspiredsection').parent().attr('class') == 'sectionContents'){
                product.getins.push('')
            }else if($('.getinspiredsection').parent().attr('class') == 'submenucontent parsys'){
                $('.sectionContents .submenu .tabs-menu nav ul li').each(function(idx1,ele1){
                    product.getins.push($(ele1).find('span').text())
                })
            }
        }
    }
}