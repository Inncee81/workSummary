var Excel = require('exceljs');
var writebook = new Excel.Workbook();
var sheet = writebook.addWorksheet('Translation sheet');
module.exports={
    excel2:function(product){
        // console.log(product)
        var fills = [
            {
                type: "pattern",
                pattern:"solid", 
                fgColor:{
                    argb:"99ccff"
                },
                name: 'Comic Sans MS', 
                family: 4, 
                size: 26, 
                underline: 'double', 
                bold: true 
            },
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
                    argb:"ccffcc"
                }
            }
        ];
        var workbook = new Excel.Workbook();
        var ws1 = workbook.addWorksheet(`${product.smn}`);
        var idx = 1
        var count_arr = []
        var count_tit = []
        var count_p = []
        for(var i = 0;i < product.feature.fTitle.length;i++){
            var count = 0
            ws1.addRow(['feature' + `${product.feature.fTitle[i][0] + 1}` +'-' + `${product.feature.fTitle[i][1] + 1}`,'feature' + `${product.feature.fTitle[i][0] + 1}` +'-' + `${product.feature.fTitle[i][1] + 1}`,product.config_layout[i].con])
            count += 1
            ws1.addRow(['title',product.bigTitle[i]])
            count += 1
            for(var j = 0;j < product.feature.fTitle[i][2].length;j++){
                count += 1
                var config_title = product.config_title[i][2][0]
                var str = ''
                if(config_title){
                    config_title = product.config_title[i][2][0]
                    str = 'div_config title'
                }else{
                    config_title = ''
                    str = ''
                }
                ws1.addRow(['Header' + `${product.feature.fTitle[i][0] + 1}` + '-' + `${j+1}` + '[text(3000)]',product.feature.fTitle[i][2][j],str,config_title])
            }
            count_tit.push(product.feature.fTitle[i][2].length)
            for(var j = 0;j < product.feature.fcontent[i][2].length;j++){
                count += 1
                var config_content = product.config_content[i][2][0]
                var str = ''
                if(config_content){
                    config_content = product.config_content[i][2][0]
                    str = 'div_config Paragraph'
                }else{
                    cpnfig_content = ''
                    str = ''
                }
                ws1.addRow(['Paragraph' + `${product.feature.fcontent[i][0] + 1}` + '-' + `${j+1}` + '[text(3000)]',product.feature.fcontent[i][2][j],str,config_content])
            }
            count_p.push(product.feature.fcontent[i][2].length)
            var str1 = ''
            if(product.config_layout[i].color != ''){
                str1 = 'div_config color'
            }else{
                str1 = ''
            }
            ws1.addRow(['Textcolor [text(10)]',product.layout[i].color,str1,product.config_layout[i].color])
            count += 1
            ws1.addRow(['Textposition [text(20)]',product.layout[i].align])
            count += 1
            ws1.addRow(['',''])
            count_arr.push(idx)
            count += 1
            if(i < product.feature.fTitle.length-1){
                idx += count
            }else{
                idx += count
            }
            // console.log(idx)
            
        }
        // console.log(count_arr)
        // console.log(count_tit)
        // console.log(count_p)
        
        // rowSty(ws1, 8, 8,0,0)
        function colWidth(arg_ws, arg_cols, arg_width) {
            for(i in arg_cols) {
                arg_ws.getColumn(arg_cols[i]).width = arg_width;
            }
        }
        colWidth(ws1, [1], 25);
        colWidth(ws1, [2], 60);
        colWidth(ws1, [3], 25);
        colWidth(ws1, [4], 25);
        // function rowSty(arg_ws, arg_start, arg_end,num,sty) {
            // for(i = arg_start; i <= arg_end; i++) {
            //     arg_ws.findRow(i).alignment = { 
            //         vertical: 'middle',
            //         horizontal: 'left' 
            //     };
            //     var arr = []
            //     arg_ws.findRow(i).eachCell(function (cell, index) {
            //         arr.push(cell)
            //     })
            //     arr[num].fill = fills[sty];
            //     arr[num].border = {
            //         top: {style:'thin'},
            //         left: {style:'thin'},
            //         bottom: {style:'thin'},
            //         right: {style:'thin'}
            //     };
            // }
        // }
        for(var i = 0;i < count_arr.length;i++){
            ws1.findRow(count_arr[i]).alignment = { 
                vertical: 'middle',
                horizontal: 'left' 
            };
            var arr = []
            ws1.findRow(count_arr[i]).eachCell(function (cell, index) {
                arr.push(cell)
            })
            arr[0].fill = fills[0];
            arr[0].border = {
                top: {style:'thin'},
                left: {style:'thin'},
                bottom: {style:'thin'},
                right: {style:'thin'}
            };
            arr[1].fill = fills[1];
            arr[1].border = {
                top: {style:'thin'},
                left: {style:'thin'},
                bottom: {style:'thin'},
                right: {style:'thin'}
            };
            for(j = count_arr[i] + 1; j <= count_arr[i] + 1+count_tit[i]+count_p[i]; j++) {
                ws1.findRow(j).alignment = { 
                    vertical: 'middle',
                    horizontal: 'left' ,
                    wrapText: true
                };
                var arr = []
                ws1.findRow(j).eachCell(function (cell, index) {
                    arr.push(cell)
                })
                arr[0].fill = fills[2];
                arr[0].border = {
                    top: {style:'thin'},
                    left: {style:'thin'},
                    bottom: {style:'thin'},
                    right: {style:'thin'}
                };
                arr[1].fill = fills[2];
                arr[1].border = {
                    top: {style:'thin'},
                    left: {style:'thin'},
                    bottom: {style:'thin'},
                    right: {style:'thin'}
                };
            }
            for(j = count_arr[i] + 1+count_tit[i]+count_p[i]+1; j <= count_arr[i] + 1+count_tit[i]+count_p[i]+2; j++) {
                ws1.findRow(j).alignment = { 
                    vertical: 'middle',
                    horizontal: 'left' 
                };
                var arr = []
                ws1.findRow(j).eachCell(function (cell, index) {
                    arr.push(cell)
                })
                arr[0].fill = fills[1];
                arr[0].border = {
                    top: {style:'thin'},
                    left: {style:'thin'},
                    bottom: {style:'thin'},
                    right: {style:'thin'}
                };
                arr[1].fill = fills[1];
                arr[1].border = {
                    top: {style:'thin'},
                    left: {style:'thin'},
                    bottom: {style:'thin'},
                    right: {style:'thin'}
                };
            }
        }
        workbook.xlsx.writeFile(`./result/${product.smn}`+ '-feature.xlsx')
        .then(function(){
            console.log('生成 xlsx');
        });
    }
}