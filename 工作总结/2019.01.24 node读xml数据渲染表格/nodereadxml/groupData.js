
function groupData(res,excelData){
    // console.log('--------------------------------------------')
    excelData.smn = res[0]
    for(var i = 0;i < res[1].data.length;i++){
        var arr = []
        if(res[1].data[i].$.attributeName == res[2].data[i].$.attributeName){
            arr.push(res[1].data[i].$.transAttributeName)
            if(res[1].data[i]._){
                arr.push(res[1].data[i]._)
            }else{
                arr.push('')
            }
            excelData.firstData.push(arr)
        }else{
            excelData.smn = ''
            excelData.firstData = []
            excelData.groups = []
            excelData.flag = false
            flag1  = false
            break;
        }
    }
    for(var i = 0;i < res[1].dataGroup.length;i++){
        var group = {
            bigGroupT:'',
            smallGroupT:[],
            smallGroupDataT:[],
            smallGroupDataV:[],
            bigGroupDataT:[],
            bigGroupDataV:[]
        }
        // console.log(res[1].dataGroup[i].$.transAttributeName)
        // console.log('-----------------------------')
        // console.log(res[1].dataGroup[i].$.transAttributeName)
        group.bigGroupT = res[1].dataGroup[i].$.transAttributeName
        // console.log(group.bigGroupT)
        if(res[1].dataGroup[i].$.attributeName == res[2].dataGroup[i].$.attributeName){
            if(res[1].dataGroup[i].dataGroup){
                var smt = []
                for(var j = 0;j < res[1].dataGroup[i].dataGroup.length;j++){
                    if(res[1].dataGroup[i].dataGroup[j].$.attributeName == res[2].dataGroup[i].dataGroup[j].$.attributeName){
                        smt.push(res[1].dataGroup[i].dataGroup[j].$.transAttributeName)
                        var sgdt = []
                        var sgdv = []
                        // console.log(res[1].dataGroup[i].dataGroup[j].data)
                        if(res[1].dataGroup[i].dataGroup[j].data){
                            for(var k = 0;k < res[1].dataGroup[i].dataGroup[j].data.length;k++){
                                if(res[1].dataGroup[i].dataGroup[j].data[k].$.attributeName == res[2].dataGroup[i].dataGroup[j].data[k].$.attributeName){
                                    sgdt.push(res[1].dataGroup[i].dataGroup[j].data[k].$.transAttributeName)
                                    sgdv.push(res[1].dataGroup[i].dataGroup[j].data[k]._)
                                }else{
                                    excelData.smn = ''
                                    excelData.firstData = []
                                    excelData.groups = []
                                    excelData.flag = false
                                    break;
                                }
                            }
                        }
                        group.smallGroupDataT.push(sgdt)
                        group.smallGroupDataV.push(sgdv)
                        if(excelData.smn == '' && excelData.firstData.length == 0 && excelData.groups.length == 0 && excelData.flag == false){
                            excelData.smn = ''
                            excelData.firstData = []
                            excelData.groups = []
                            excelData.flag = false
                            break;
                        }
                    }else{
                        excelData.smn = ''
                        excelData.firstData = []
                        excelData.groups = []
                        excelData.flag = false
                        break;
                    }
                }
            group.smallGroupT.push(smt)
            }
            if(res[1].dataGroup[i].data && excelData != ''){
                var bgdt = []
                var bgdv = []
                for(var j = 0;j < res[1].dataGroup[i].data.length;j++){
                    if(res[1].dataGroup[i].data[j].$.attributeName == res[2].dataGroup[i].data[j].$.attributeName){
                        bgdt.push(res[1].dataGroup[i].data[j].$.transAttributeName)
                        bgdv.push(res[1].dataGroup[i].data[j]._)
                    }else{
                        excelData.smn = ''
                        excelData.firstData = []
                        excelData.groups = []
                        excelData.flag = false
                        break;
                    }
                }
                group.bigGroupDataT.push(bgdt)
                group.bigGroupDataV.push(bgdv)
            }
        }else{
            excelData.smn = ''
            excelData.firstData = []
            excelData.groups = []
            excelData.flag = false
            break;
        }
        if(excelData.smn == '' && excelData.firstData.length == 0 && excelData.groups.length == 0 && excelData.flag == false){
            
            break;
        }else{
            excelData.groups.push(group)
        }
        // console.log(flag2)
        // excelData.groups.push(group)
    }
}
module.exports={
    groupData
}