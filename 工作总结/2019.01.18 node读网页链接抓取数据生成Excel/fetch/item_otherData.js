var cheerio = require('cheerio')
module.exports={
    itemOther:function(res,product){
        var $ = cheerio.load(res.text)
        // fullname
        product.fullname = $('#browsebar-name h1').text()
        // keycopy
        product.keycopy = $(".keycopy-in .header1").text()
        //subcopy
        product.subcopy = $('.keycopy-in .keycopy-body p').text().replace(/[\r\n]/g, "")
        // modelN
        product.modelN = $('.keycopy-in .subheader2').text()
        // smn
        product.smn = $('.keycopy-in .subheader2').text()
        // keyspec
        $(".keyspecsblock .subheader1").each(function(idx,element){
            product.keyspec.push((element.children[0].data))
        });
        //keyspecV
        $(".keyspecsblock .bodycopy5").each(function(idx,element){
            if(element.children.length == 0){
                product.keyspecV.push('NOT FOUND')
            }else{
                product.keyspecV.push((element.children[0].data))
            }
        });
        // submenu
        product.feature.submenu = $('.feature-submenu').text()
        // Annotation
        product.Annotation = $('#hero-footer .notes p').text().replace(/[\r\n]/g, "")
    }
}