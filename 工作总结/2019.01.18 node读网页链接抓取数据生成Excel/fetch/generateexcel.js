var Excel = require('exceljs');
var writebook = new Excel.Workbook();
var excel1 = require('./Reference_Items.js')
var excel2 = require('./featureExportExcel.js')
var sheet = writebook.addWorksheet('Translation sheet');
module.exports={
    generateFea:function(product){
        excel2.excel2(product)
    },
    genrateRef:function(product,index){
        excel1.excel1(product)
    }
}