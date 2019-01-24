var groupData = require('./groupData.js')
var ExportExecl = require('./exprotExcel.js')
function allData(res){
    var excelData = {
        smn:'',
        firstData:[],
        groups:[],
        flag:true
    }
    Promise.all([groupData.groupData(res,excelData)]).then((result) => {
        ExportExecl.ExportExecl(excelData)
        // console.log(excelData.groups)
    })
}
module.exports={
    allData
}