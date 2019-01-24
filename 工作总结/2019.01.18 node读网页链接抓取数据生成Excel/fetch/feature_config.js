var cheerio = require('cheerio')
var con_layout = require('./config_layout.js')
module.exports={
    config:function(tabI,feaI,fctx,res,product){
        var $ = cheerio.load(res.text)
        var arr = []
        var brr = []
        var crr = []
        var drr = []
        var err = []
        if($(fctx).find('.div-config')){
            arr.push(tabI)
            arr.push(feaI)
            $(fctx).find('.div-config').each(function(i,e){
                brr.push($(e).find('h3').text().replace(/[\r\n]/g, ""))
            })
            arr.push(brr)
            arr.push($(fctx).find('div').eq(0).attr('class').replace(/\s*/g,""))
            if($(fctx).find('.div-config').eq(0).attr('style')){
                err.push($(fctx).find('.div-config').eq(0).attr('style').replace(/\s*/g,""))
                arr.push(err)
            }else{
                err.push('')
                arr.push(err)
            }
            
            product.config_title.push(arr)
            crr.push(tabI)
            crr.push(feaI)
            var con_wrap = []
            $(fctx).find('.div-config').each(function(i,e){
                drr.push($(e).find('p').text().replace(/[\r\n]/g, ""))
                if($(e).find('p span')){
                    con_wrap.push($(e).find('p span').eq(0).text())
                }
            })
            var con = []
            // console.log(con_wrap)
            for(var i = 0;i < drr.length;i++){
                // console.log(con_wrap[i])
                con.push(drr[i].replace(con_wrap[i],`${con_wrap[i]}`+'\r\n'))
            }
            crr.push(con)
            product.config_content.push(crr)
        }else{
            arr.push(tabI)
            arr.push(feaI)
            arr.push('')
            arr.push('')
            arr.push('')
            product.config_title.push(arr)
            crr.push(tabI)
            crr.push(feaI)
            crr.push('')
            crr.push('')
            product.config_content.push(crr)
        }
        con_layout.con_layout(arr,res,product)
    }
}