var readexcel = require('./readexcel.js')
var urls = readexcel.read('url.xlsx')
var cheerio = require('cheerio')
var products = []
var superagent = require('superagent')
var async = require('async')
var gen=require('./generateexcel.js')
var fTab = require('./fTab.js')
var itemOther = require('./item_otherData')
var accgroup = require('./accessory_data.js')
var getins = require('./getinsprid.js')
function truncate(arr) {
    var m = arr.slice(0);
    m.splice(m.length - 1, 1);
    m=m.join("/")
    m+='.html'
    return m;
}
var fetchFreture = function(product){
    return new Promise(function (resolve, reject) {
        superagent.get(product.url).end(function (err, res) {
            var $ = cheerio.load(res.text)
            fTab.fTab($('#features'),res,product)
            // console.log(product.config_content)
            // console.log(product.feature.fTitle)
            // console.log(product.layout)
            // console.log(product.feature.fcontent)
            // console.log(product.config_layout)
            // console.log(product.bigTitle)
            resolve()
        })
    })
}
var fetchP = function (product) {
    return new Promise(function (resolve, reject) {
        superagent.get(product.url).end(function (err, res) {
            var $ = cheerio.load(res.text)
            itemOther.itemOther(res,product)
            accgroup.accgroup($('.accessorysection'),res,product)
            getins.getins($('.getinspiredsection'),res,product)
            // console.log(product.AccGroup)
            // console.log(product.Annotation)
            // console.log(product.getins)
            resolve()
            // console.log(product.subcopy)
        })
    })
}
var fetchC = function (product) {
    return new Promise(function (resolve) {
        var desurl = product.url
        var pname = desurl.split("/").pop()
        truncate(desurl.split("/"))
        desurl = truncate(desurl.split("/"))
        superagent.get(desurl).end(function (err, res) {
            var $ = cheerio.load(res.text)
            $(".common-productbox").each((i, e) => {
                if ($(".common-productbox").eq(i).find('.linkarea').attr('href').split('/').pop() == pname) {
                    product.catchprase = $(".common-productbox").eq(i).find('.common-productbox-product__title__tx .copy').length>0 ? $(".common-productbox").eq(i).find('.common-productbox-product__title__tx .copy').text() : ''
                    product.des = $(".common-productbox").eq(i).find('.common-productbox-product__caption__tx').length>0 ? $(".common-productbox").eq(i).find('.common-productbox-product__caption__tx').text() : ''

                }
            })
            resolve()
        })
    })
}
async.mapLimit(urls, 1, function (url, callback) {
    var product = {
        url: '',
        des: '', //上一层.common-productbox-product__caption__tx   //*
        fullname: '',  //#browsebar-name .name
        getins: [],     //#inspirationen .ui-tabs-anchor          //*
        keycopy: '',    //.keycopy-in h2.header1                  //*
        subcopy: '',    //.keycopy-in .keycopy-body p             //*
        keyspec: [],    //.keyspecsblock .subheader1              //*
        keyspecV: [],   //.keyspecsblock .bodycopy5               //*
        modelN: '',     //.keycopy-in .subheader2
        smn: '',        //.keycopy-in .subheader2
        Annotation:'',
        AccGroup:[],
        catchprase: '', //上一层 .common-productbox-product__title__tx .copy    //*
        feature: {     //.slide-cont                                          //* 
            fTitle: [], //.slide-cont .header1,.slide-cont .header3
            fcontent: [],//.slide-cont .header1,.slide-cont .bodycopy1
            // layout: '',// Feature 1image 1block, Feature 2image 2block,Feature 3image 3block,Feature 4image 4block
            // color:'', //.feature-submenu
            // align:''
        },
        layout:[],
        config_title:[],
        config_content:[],
        config_layout:[],
        bigTitle:[]
    }
    product.url = url
    Promise.all([fetchP(product), fetchC(product),fetchFreture(product)]).then((result) => {
        products.push(product)
        callback(null, product)
    })

}, function (err, result) {
    // console.log(result)
    result.forEach(function(pro,index){
        gen.generateFea(pro)
        gen.genrateRef(pro,index)
    })
})

