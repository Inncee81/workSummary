var cheerio = require('cheerio')

module.exports={
    con_layout:function(arr,res,product){
        var $ = cheerio.load(res.text)
        // console.log(arr[4][0])
        var con_lay = {     //.slide-cont//* 
            con:'div',
            layout: '',// Feature 1image 1block, Feature 2image 2block,Feature 3image 3block,Feature 4image 4block
            color:'', //.feature-submenu
            align:'',
        }
        if(arr[2].length == 0){
            con_lay.con = '';
            con_lay.layout = '';
            con_lay.color = '';
            con_lay.align = '';
            product.config_layout.push(con_lay)
        }else {
            con_lay.con = 'div';
            if(arr[3] == 'features-layoutframelayoutstyle-eslide-blockstyle-dark'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Light';
                con_lay.align = 'Middle-Right';
            }else if(arr[3] == 'features-layoutframelayoutstyle-eslide-block'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Dark';
                con_lay.align = 'Middle-Right';
            }else if(arr[3] == 'features-layoutframelayoutstyle-e-reverseslide-blockstyle-dark'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Light';
                con_lay.align = 'Middle-Left';
            }else if(arr[3] == 'features-layoutframelayoutstyle-e-reverseslide-block'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Dark';
                con_lay.align = 'Middle-Left';
            }else if(arr[3] == 'features-layoutframelayoutstyle-4cornersupperrightslide-blockstyle-dark'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Light';
                con_lay.align = 'Upper-Right';
            }else if(arr[3] == 'features-layoutframelayoutstyle-4cornersupperrightslide-block'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Dark';
                con_lay.align = 'Upper-Right';
            }else if(arr[3] == 'features-layoutframelayoutstyle-fullwidthupperslide-blockstyle-dark'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Light';
                con_lay.align = 'Upper-Center';
            }else if(arr[3] == 'features-layoutframelayoutstyle-fullwidthupperslide-block'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Dark';
                con_lay.align = 'Upper-Center';
            }else if(arr[3] == 'features-layoutframelayoutstyle-4cornersupperleftslide-blockstyle-dark'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Light';
                con_lay.align = 'Upper-Left';
            }else if(arr[3] == 'features-layoutframelayoutstyle-4cornersupperleftslide-block'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Dark';
                con_lay.align = 'Upper-Left';
            }else if(arr[3] == 'features-layoutframelayoutstyle-4cornerslowerrightslide-blockstyle-dark'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Light';
                con_lay.align = 'Lower-Right';
            }else if(arr[3] == 'features-layoutframelayoutstyle-4cornerslowerrightslide-block'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Dark';
                con_lay.align = 'Lower-Right';
            }else if(arr[3] == 'features-layoutframelayoutstyle-fullwidthlowerslide-blockstyle-dark'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Light';
                con_lay.align = 'Lower-Center';
            }else if(arr[3] == 'features-layoutframelayoutstyle-fullwidthlowerslide-block'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Dark';
                con_lay.align = 'Lower-Center';
            }else if(arr[3] == 'features-layoutframelayoutstyle-4cornerslowerleftslide-blockstyle-dark'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Light';
                con_lay.align = 'Lower-Left';
            }else if(arr[3] == 'features-layoutframelayoutstyle-4cornerslowerleftslide-block'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Dark';
                con_lay.align = 'Lower-Left';
            }else if(arr[3] == 'features-layoutframelayoutstyle-centerslide-blockstyle-dark'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Light';
                con_lay.align = 'Center';
            }else if(arr[3] == 'features-layoutframelayoutstyle-centerslide-block'){
                con_lay.layout = '1 Image-1Block';
                con_lay.color = 'Dark';
                con_lay.align = 'Center';
            }else if(arr[3] == 'features-layoutframelayoutstyle-hslide-blockstyle-dark'){
                con_lay.layout = '2 Image-2Block';
                con_lay.color = 'Light';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframelayoutstyle-hslide-block'){
                con_lay.layout = '2 Image-2Block';
                con_lay.color = 'Dark';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframelayoutstyle-gslide-blockstyle-dark'){
                con_lay.layout = '3 Image-3Block';
                con_lay.color = 'Light';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframelayoutstyle-gslide-block'){
                con_lay.layout = '3 Image-3Block';
                con_lay.color = 'Dark';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframelayoutstyle-fslide-blockstyle-dark'){
                con_lay.layout = '4 Image-4Block';
                con_lay.color = 'Light';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframelayoutstyle-fslide-block'){
                con_lay.layout = '4 Image-4Block';
                con_lay.color = 'Dark';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframelayoutstyle-cslide-blockstyle-dark'){
                con_lay.layout = '1 Image-4Block';
                con_lay.color = 'Light';
                con_lay.align = '';
                    
                    
            }else if(arr[3] == 'features-layoutframelayoutstyle-cslide-block'){
                con_lay.layout = '1 Image-4Block';
                con_lay.color = 'Dark';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframelayoutstyle-aslide-blockstyle-darkaddvideo'){
                con_lay.layout = '1 Vedio 1 Block';
                con_lay.color = 'Light';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframelayoutstyle-aslide-blockaddvideo'){
                con_lay.layout = '1 Vedio 1 Block';
                con_lay.color = 'Dark';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframelayoutstyle-islide-blockstyle-dark'){
                con_lay.layout = '8 Blocks';
                con_lay.color = 'Light';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframelayoutstyle-islide-block'){
                con_lay.layout = '8 Blocks';
                con_lay.color = 'Dark';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframeslide-blockstyle-dark'){
                con_lay.layout = 'Blank Block';
                con_lay.color = 'Dark';
                con_lay.align = '';
            }else if(arr[3] == 'features-layoutframeslide-block'){
                con_lay.layout = 'Blank Block';
                con_lay.color = 'Dark';
                con_lay.align = '';
            }
            if(arr[4][0].indexOf('color') != -1){
                var str = arr[4][0]
                var index = str.indexOf('color:')
                var col = str.substr(index+6,3)
                if(col == '#00'){
                    con_lay.color.push('Dark')
                }else if(col == '#ff'){
                    con_lay.color.push('Light')
                }
            }
            product.config_layout.push(con_lay)
        }
    }
}