var cheerio = require('cheerio')
var fTitle = require('./feature_title.js')
var fcontent = require('./feature_content.js')
var config = require('./feature_config.js')
var bigTitle = require('./feature_bigTitle.js')
var name = require('./feature_name.js')
module.exports={
    fTab:function(features,res,product){
        var $ = cheerio.load(res.text)
        if(features){
            $('.feature-no-tab').each(function(idx1,ele1){
                $(ele1).find('.slide-cont').each(function(idx2,ele2){
                    fTitle.fTitle(idx1,idx2,ele2,res,product)
                    config.config(idx1,idx2,ele2,res,product)
                    name.name(idx1,idx2,ele2,res,product)
                    fcontent.fcontent(idx1,idx2,ele2,res,product)
                    bigTitle.bigTitle(idx1,idx2,ele2,res,product)
                })
            })
        }
    }
}