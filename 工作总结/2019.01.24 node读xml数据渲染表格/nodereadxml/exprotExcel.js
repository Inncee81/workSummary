var Excel = require('exceljs');
var writebook = new Excel.Workbook();
function ExportExecl(excelData){
    if(excelData.smn == '' && excelData.firstData.length == 0 && excelData.groups.length == 0 && excelData.flag == false){
        
    }else{
        var workbook = new Excel.Workbook();
        var ws1 = workbook.addWorksheet(excelData.smn);
        // console.log(excelData.groups[0])
        for(var i = 0;i < excelData.groups.length;i++){
            if(excelData.groups[i].smallGroupT.length != 0){
                ws1.addRow([excelData.groups[i].bigGroupT,excelData.groups[i].smallGroupT[0][0],excelData.groups[i].smallGroupDataT[0][0],excelData.groups[i].smallGroupDataV[0][0]])
                for(var j = 0;j < excelData.groups[i].smallGroupT[0].length;j++){
                    for(var k = 0;k < excelData.groups[i].smallGroupDataT[j].length;k++){
                        if(excelData.groups[i].smallGroupDataT[j][k +1]){
                            ws1.addRow(['','',excelData.groups[i].smallGroupDataT[j][k +1],excelData.groups[i].smallGroupDataV[j][k +1]])
                        }
                    }
                    if(excelData.groups[i].smallGroupT[0][j + 1]){
                        ws1.addRow(['',excelData.groups[i].smallGroupT[0][j + 1],excelData.groups[i].smallGroupDataT[j + 1][0],excelData.groups[i].smallGroupDataV[j + 1][0]])
                    }
                }
                if(excelData.groups[i].bigGroupDataT[0]){
                    for(var j = 0;j < excelData.groups[i].bigGroupDataT[0].length;j++){
                        // console.log(excelData.groups[i].bigGroupDataT[0][j])
                        ws1.addRow(['',excelData.groups[i].bigGroupDataT[0][j],'',excelData.groups[i].bigGroupDataV[0][j]])
                    }
                }
            }else{
                ws1.addRow([excelData.groups[i].bigGroupT,excelData.groups[i].bigGroupDataT[0][0],'',excelData.groups[i].bigGroupDataV[0][0]])
                for(var j = 0;j < excelData.groups[i].bigGroupDataT[0].length;j++){
                    if(excelData.groups[i].bigGroupDataT[0][j + 1]){
                        ws1.addRow(['',excelData.groups[i].bigGroupDataT[0][j + 1],'',excelData.groups[i].bigGroupDataV[0][j + 1]])
                    }
                }
            }
        }
        for(var i = 0;i < excelData.firstData.length;i++){
            ws1.addRow([excelData.firstData[i][0],excelData.firstData[i][1]])
        }
        function colWidth(arg_ws, arg_cols, arg_width) {
            for(i in arg_cols) {
                arg_ws.getColumn(arg_cols[i]).width = arg_width;
            }
        }
        colWidth(ws1, [1,2,3,4], 40);
        function rowSty(arg_ws, arg_start, arg_end,num,sty) {
            for(i = arg_start; i <= arg_end; i++) {
                if(arg_ws.findRow(i)){
                    arg_ws.findRow(i).alignment = { 
                        vertical: 'middle',
                        horizontal: 'left',
                        wrapText: true 
                    };
                    arg_ws.findRow(i).eachCell(function (cell, index) {
                        cell.fill = {
                            type: "pattern",
                            pattern:"solid", 
                            fgColor:{
                                argb:"ffffff"
                            }, 
                            bold: true,
                            
                        }
                        cell.font = {
                            name: 'Arial',
                            color:{
                                argb:"000000"
                            }
                        } 
                        cell.border = {
                            top: {style:'thin'},
                            left: {style:'thin'},
                            bottom: {style:'thin'},
                            right: {style:'thin'}
                        };
                    })
                }
            }
        }
        rowSty(ws1,1,10000)
        workbook.xlsx.writeFile(`./result/${excelData.smn}`+ '.xlsx')
        .then(function(){
            console.log('生成 xlsx');
        });
    }
}
module.exports={
    ExportExecl
}