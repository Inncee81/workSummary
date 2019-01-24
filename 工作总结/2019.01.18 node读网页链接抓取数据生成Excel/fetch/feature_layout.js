var cheerio = require('cheerio')
module.exports={
    layout:function(arr,res,product){
        var $ = cheerio.load(res.text)
        // console.log(tabI,feaI,$(fctx).find('div').eq(0).attr('class'))
        // console.log(arr)
        for(var i = 0;i < arr.length;i++){
            var feature = {     //.slide-cont//* 
                layout: '',// Feature 1image 1block, Feature 2image 2block,Feature 3image 3block,Feature 4image 4block
                color:'', //.feature-submenu
                align:'',
            }
            // var str = arr[i][2].replace(/\s*/g,"")
            // console.log(str)
            if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-eslide-blockstyle-dark'){
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
                feature.layout = '1 Image-1Block';
                feature.color = 'Light';
                feature.align = 'Middle-Right';
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-eslide-block'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Dark';
                feature.align = 'Middle-Right';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-e-reverseslide-blockstyle-dark'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Light';
                feature.align = 'Middle-Left';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-e-reverseslide-block'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Dark';
                feature.align = 'Middle-Left';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-4cornersupperrightslide-blockstyle-dark'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Light';
                feature.align = 'Upper-Right';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-4cornersupperrightslide-block'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Dark';
                feature.align = 'Upper-Right';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-fullwidthupperslide-blockstyle-dark'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Light';
                feature.align = 'Upper-Center';
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-fullwidthupperslide-block'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Dark';
                feature.align = 'Upper-Center';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-4cornersupperleftslide-blockstyle-dark'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Light';
                feature.align = 'Upper-Left';
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-4cornersupperleftslide-block'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Dark';
                feature.align = 'Upper-Left';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-4cornerslowerrightslide-blockstyle-dark'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Light';
                feature.align = 'Lower-Right';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-4cornerslowerrightslide-block'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Dark';
                feature.align = 'Lower-Right';
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-fullwidthlowerslide-blockstyle-dark'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Light';
                feature.align = 'Lower-Center';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-fullwidthlowerslide-block'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Dark';
                feature.align = 'Lower-Center';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-4cornerslowerleftslide-blockstyle-dark'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Light';
                feature.align = 'Lower-Left';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-4cornerslowerleftslide-block'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Dark';
                feature.align = 'Lower-Left';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-centerslide-blockstyle-dark'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Light';
                feature.align = 'Center';
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-centerslide-block'){
                feature.layout = '1 Image-1Block';
                feature.color = 'Dark';
                feature.align = 'Center';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-hslide-blockstyle-dark'){
                feature.layout = '2 Image-2Block';
                feature.color = 'Light';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-hslide-block'){
                feature.layout = '2 Image-2Block';
                feature.color = 'Dark';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-gslide-blockstyle-dark'){
                feature.layout = '3 Image-3Block';
                feature.color = 'Light';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-gslide-block'){
                feature.layout = '3 Image-3Block';
                feature.color = 'Dark';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-fslide-blockstyle-dark'){
                feature.layout = '4 Image-4Block';
                feature.color = 'Light';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-fslide-block'){
                feature.layout = '4 Image-4Block';
                feature.color = 'Dark';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-cslide-blockstyle-dark'){
                feature.layout = '1 Image-4Block';
                feature.color = 'Light';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-cslide-block'){
                feature.layout = '1 Image-4Block';
                feature.color = 'Dark';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-aslide-blockstyle-darkaddvideo'){
                feature.layout = '1 Vedio 1 Block';
                feature.color = 'Light';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-aslide-blockaddvideo'){
                feature.layout = '1 Vedio 1 Block';
                feature.color = 'Dark';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-islide-blockstyle-dark'){
                feature.layout = '8 Blocks';
                feature.color = 'Light';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframelayoutstyle-islide-block'){
                feature.layout = '8 Blocks';
                feature.color = 'Dark';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframeslide-blockstyle-dark'){
                feature.layout = 'Blank Block';
                feature.color = 'Dark';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }else if(arr[i][2].replace(/\s*/g,"") == 'features-layoutframeslide-block'){
                feature.layout = 'Blank Block';
                feature.color = 'Dark';
                feature.align = '';
                feature.tabI = arr[i][0]
                feature.feaI = arr[i][1]
            }
            if(arr[i][3][0].indexOf('color') != -1){
                var str = arr[i][3][0]
                var index = str.indexOf('color:')
                var col = str.substr(index+6,3)
                if(col == '#00'){
                    feature.color = 'Dark'
                }else if(col == '#ff'){
                    feature.color = 'Light'
                }
            }
            product.layout.push(feature)
        }
    }
}