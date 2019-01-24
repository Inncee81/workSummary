var xlsx = require('node-xlsx');
var urls=[]
module.exports={
    read:function(filename){
        var obj = xlsx.parse(filename);
        
        obj[0].data.forEach(url => {
            urls.push(url[0])
        });
        return(urls)
    }
}