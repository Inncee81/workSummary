var Excel = require('exceljs');
var writebook = new Excel.Workbook();
var sheet = writebook.addWorksheet('Translation sheet');
module.exports={
    excel1:function(product){
        var fills = [
            {
                type: "pattern", 
                pattern:"solid", 
                fgColor:{
                    argb:"ffff99"
                }
            },
            {
                type: "pattern", 
                pattern:"solid", 
                fgColor:{
                    argb:"92d050"
                }
            }
        ]
        var workbook = new Excel.Workbook();
        var ws1 = workbook.addWorksheet(`${product.smn}`);
        var acclen = 0
        if(product.AccGroup.length == 0){
            ws1.addRow(['Accessory Group Name 1 [text(3000)]',''])
            acclen = 1
        }else{
            for(var i = 0;i < product.AccGroup.length;i++){
                ws1.addRow(['Accessory Group Name' + `${i + 1}` + ' [text(3000)]',product.AccGroup[i]])
            }
            acclen = product.AccGroup.length
        }
        // console.log(product.Annotation)
        ws1.addRow(['Annotation [text(3000)]',product.Annotation])
        ws1.addRow(['Compare Item 1 [text(3000)]',''])
        for(var i = 10;i < 20;i++){
            ws1.addRow(['Compare Item '+ `${i}` + '[text(3000)]',''])
        }
        ws1.addRow(['Compare Item 2 [text(3000)]',''])
        ws1.addRow(['Compare Item 20 [text(3000)]',''])
        for(var i = 3;i < 10;i++){
            ws1.addRow(['Compare Item '+ `${i}` + '[text(3000)]',''])
        }
        ws1.addRow(['Compare Value 1 [text(3000)]',''])
        for(var i = 10;i < 20;i++){
            ws1.addRow(['Compare Value '+ `${i}` + '[text(3000)]',''])
        }
        ws1.addRow(['Compare Value 2 [text(3000)]',''])
        ws1.addRow(['Compare Value 20 [text(3000)]',''])
        for(var i = 3;i < 10;i++){
            ws1.addRow(['Compare Value '+ `${i}` + '[text(3000)]',''])
        }

        // des
        ws1.addRow(['Description For See All [text(3000)] ',product.des])

        // 默认内容
        ws1.addRow(['Faceted Item 1 [text(3000)]',''])
        for(var i = 10;i < 20;i++){
            ws1.addRow(['Faceted Item '+ `${i}` + '[text(3000)]',''])
        }
        ws1.addRow(['Faceted Item 2 [text(3000)]',''])
        ws1.addRow(['Faceted Item 20 [text(3000)]',''])
        for(var i = 3;i < 10;i++){
            ws1.addRow(['Faceted Item '+ `${i}` + '[text(3000)]',''])
        }
        for(var i = 1;i < 4;i++){
            ws1.addRow(['Faceted Slider Item '+ `${i}` + '[text(3000)]',''])
        }
        for(var i = 1;i < 4;i++){
            ws1.addRow(['Faceted Slider Unit '+ `${i}` + '[text(3000)]',''])
        }
        // fullname
        ws1.addRow(['Full Product Name [text(3000)] ',product.fullname])

        // getins
        var get = 0
        if(product.getins.length == 0){
            ws1.addRow(['Get Inspired Title 1 [text(3000)]',''])
            get = 1
        }else{
            for(var i = 0;i < product.getins.length;i++){
                ws1.addRow(['Get Inspired Title' + `${i + 1}` + ' [text(3000)]',product.getins[i]])
            }
            get = product.getins.length
        }
        //keycopy
        ws1.addRow(['Key Copy [text(3000)]',product.keycopy])
        //keyspec
        var key = 0
        if(product.keyspec.length == 0){
            ws1.addRow(['Key Specs 1 [text(3000)]',''])
            key = 1
        }else{
            for(var i = 0;i < product.keyspec.length;i++){
                ws1.addRow(['Key Specs' + `${i + 1}` + ' [text(3000)]',product.keyspec[i]])
            }
            key = product.keyspec.length
        }
        //keyspecV
        var keyV = 0
        if(product.keyspecV.length == 0){
            ws1.addRow(['Key Specs Value 1 [text(3000)]',''])
            keyV = 1
        }else{
            for(var i = 0;i < product.keyspecV.length;i++){
                if(product.keyspecV[i] == 'NOT FOUND'){
                    ws1.addRow(['Key Specs Value' + `${i + 1}` + ' [text(3000)]',''])
                }else{
                    ws1.addRow(['Key Specs Value' + `${i + 1}` + ' [text(3000)]',product.keyspecV[i]])
                }
            }
            keyV = product.keyspecV.length
        }
        // modelN
        ws1.addRow(['Model Name [text(115)]',product.modelN])
        //modelN
        ws1.addRow(['Model Number [text(3000)]',product.modelN])
        //catchprase
        ws1.addRow(['Product Catch Phrase [text(3000)]',product.catchprase])
        // 默认
        ws1.addRow(['Sector Name [text(3000)]',''])
        for(var i = 1;i < 6;i++){
            ws1.addRow(['Sector Name '+ `${i}` + '[text(3000)]',''])
        }
        //smn
        ws1.addRow(['Short Model Number [text(115)]',product.smn])
        //subcopy
        // console.log(product.subcopy)
        ws1.addRow(['Sub Copy [text(3000)]',product.subcopy])
        // 默认
        ws1.addRow(['UMN Without Suffix [text(3000)]',''])
        ws1.addRow(['Unified Model Number [text(255)]',''])

        //样式
        function rowSty(arg_ws, arg_start, arg_end,sty) {
            for(i = arg_start; i <= arg_end; i++) {
                arg_ws.findRow(i).alignment = { 
                    vertical: 'middle',
                    horizontal: 'left' ,
                    wrapText: true 
                };
                arg_ws.findRow(i).eachCell(function (cell, index) {
                    cell.fill = fills[sty];
                    cell.border = {
                        top: {style:'thin'},
                        left: {style:'thin'},
                        bottom: {style:'thin'},
                        right: {style:'thin'}
                    };
                })
        
            }
        } 
        function colWidth(arg_ws, arg_cols, arg_width) {
            for(i in arg_cols) {
                arg_ws.getColumn(arg_cols[i]).width = arg_width;
            }
        }
        rowSty(ws1,1,acclen+1,0)
        rowSty(ws1,acclen+2,acclen+41,1)
        rowSty(ws1,acclen+42,acclen+42,0)
        rowSty(ws1,acclen+43,acclen+68,1)
        rowSty(ws1,acclen+69,acclen+get+key+keyV+79,0)
        rowSty(ws1,acclen+get+key+keyV+80,acclen+get+key+keyV+80,1)
        rowSty(ws1,acclen+get+key+keyV+81,acclen+get+key+keyV+81,0)
        rowSty(ws1,acclen+get+key+keyV+82,acclen+get+key+keyV+83,1)
        colWidth(ws1, [1,2], 50);
        workbook.xlsx.writeFile(`./result/${product.smn}`+'-Reference_Items.xlsx')
        .then(function(){
            console.log('生成 xlsx');
        });
    }
}