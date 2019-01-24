var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var superagent = require('superagent')
var async = require('async')
var path = require('path');//解析需要遍历的文件夹
var filePath1 = path.resolve('./inbound');
var filePath2 = path.resolve('./outbound_bk');
var above1 = require('./above.js')
var above2 = require('./above.js')
var allData = require('./allData.js')
//调用文件遍历方法
//文件遍历方法
var inData = function(product1){
    return new Promise(function (resolve, reject) {
        fs.readFile(product1.url, function(err, data) {
            parser.parseString(data, function (err, result) {
                above1.above1(product1,result)
                // console.log(product1.inbound_)
                resolve()
            });
        });
    })
}
var outData = function(product2){
    return new Promise(function (resolve, reject) {
        fs.readFile(product2.url, function(err, data) {
            parser.parseString(data, function (err, result) {
                above2.above2(product2,result)
                // console.log(product2.outbound_)
                resolve()
            });
        });
    })
}
function fileDisplay1(filePath1,Products){
    return new Promise(function (resolve, reject) {
    //根据文件路径读取文件，返回文件列表
        fs.readdir(filePath1,function(err,files){
            if(err){
                console.warn(err)
            }else{
                //遍历读取到的文件列表
                var urls = []
                files.forEach(function(filename,idx){
                    //获取当前文件的绝对路径
                    var filedir = path.join(filePath1, filename);
                    urls.push(filedir)
                });
                async.mapLimit(urls, 1, function (url, callback) {
                    var product1 = {
                        url:'',
                        inbound_:[]
                    }
                    product1.url = url
                    Promise.all([inData(product1)]).then((result) => {
                        callback(null, product1)
                    })
                }, function (err, result) {
                    // console.log(result)
                    result.forEach(function(res,index){
                        var smn = []
                        smn.push(res.inbound_[0][0])
                        smn.push(res.inbound_[1][0])
                        Products.inbound.push(smn)
                        // Products.outbound.push(smn)
                        resolve()
                    })
                })
            }
        });
    });
}
function fileDisplay2(filePath2,Products){
    return new Promise(function (resolve, reject) {
    //根据文件路径读取文件，返回文件列表
        fs.readdir(filePath2,function(err,files){
            if(err){
                console.warn(err)
            }else{
                //遍历读取到的文件列表
                var urls = []
                files.forEach(function(filename,idx){
                    //获取当前文件的绝对路径
                    var filedir = path.join(filePath2, filename);
                    urls.push(filedir)
                });
                async.mapLimit(urls, 1, function (url, callback) {
                    var product2 = {
                        url:'',
                        outbound_:[]
                    }
                    product2.url = url
                    Promise.all([outData(product2)]).then((result) => {
                        callback(null, product2)
                    })
                }, function (err, result) {
                    // console.log(result)
                    result.forEach(function(res,index){
                        // console.log(res.outbound_[1][0])
                        var smn = []
                        smn.push(res.outbound_[0][0])
                        smn.push(res.outbound_[1][0])
                        Products.outbound.push(smn)
                        // Products.outbound.push(smn)
                        resolve()
                    })
                })
            }
        });
    });
}
function All(){
    var Products = {
        inbound:[],
        outbound:[],
        All_Data:[]
    }
    Promise.all([fileDisplay2(filePath2,Products),fileDisplay1(filePath1,Products)]).then((result) => {
        // console.log()
        for(var i = 0;i < Products.outbound.length;i++){
            var arr = []
            for(var j  = 0;j < Products.inbound.length;j++){
                if(Products.outbound[i][0] == Products.inbound[j][0]){
                    arr.push(Products.outbound[i][0])
                    arr.push(Products.outbound[i][1])
                    arr.push(Products.inbound[i][1])
                }
            }
            Products.All_Data.push(arr)
        }
        // console.log(Products.All_Data[1])
        Products.All_Data.forEach(function(res,index){
            // console.log(res[1].dataGroup)
            // console.log('--------------------------------------------------------')
            allData.allData(res)
        })
    })
}
All(filePath2,filePath1)