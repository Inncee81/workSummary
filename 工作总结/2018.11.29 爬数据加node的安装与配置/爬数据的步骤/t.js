let superagent = require('superagent') // 相当于ajax 可以进行get/post请求
let cheerio = require('cheerio') //$可以用jQuery的东西
let fs = require('fs') //读写文件

// 请求百度，获取当前状态
// superagent.get('http://www.baidu.com', function(err, res) {
//     console.log(res.status)
// })


// 打印获取到的代码
// superagent.get('http://www.baidu.com', function(err, res) {
//     console.log(res.text)
// })


// 引入cheerio 可以获取想要的路径或内容
// superagent.get('http://www.baidu.com', function(err, res) {
//     var $ = cheerio.load(res.text)
//     console.log($('#setf').text())
// })


// 读取文件，读取的文件要加toString 
/* fs.readFile('./kw.txt', function(err, res) {
    console.log(res.toString())
}) */


// 把读取到的代码写入一个新的HTML中，方便阅读
// superagent.get('http://www.baidu.com').pipe(fs.createWriteStream('aaa.html'))


// 请求一个连接,获取想要内容的class,用each循环出来,写入到一个新的文件当中
//  superagent.get('https://www.panasonic.com/de/consumer/home-entertainment/blu-ray-set-top-box/recorder.html', (err, res) => {
//     var $ = cheerio.load(res.text)
//     var desTxt
//     $('.common-productbox-product__caption__tx').each(function(index, val) {

//         desTxt += $(val).text()
//         desTxt += '\r\n'

//     })
//     console.log(desTxt)
//     fs.writeFile('./t.txt', desTxt, function(err) {
//         console.log('done')
//     })
// }) 



// 用不着的,先写个尝试,下面的有了
// superagent.get('https://www.panasonic.com/de/consumer/home-entertainment/blu-ray-set-top-box/recorder.html', (err, res) => {
//     var $ = cheerio.load(res.text)
//     $('.linkarea').each((i, v) => {
//         console.log($(v).attr('href'))
//     })

// })


// 利用 promise 异步
var step1 = function(url) {
    // promise
    return new Promise(function(resolve, reject) {
        // 请求传入的连接
        superagent.get(url, (err, res) => {
            var $ = cheerio.load(res.text)
            var linkArr = []
            // 将循环出来的内容push到数组里备用
            $('.linkarea').each((i, v) => {
                linkArr.push($(v).attr('href'))
            })
            console.log(linkArr)
            // 固定的,promise传给.then的东西
            resolve(linkArr)
        })
    })
}

var step2 = function(linkArr) {
    return new Promise((resolve, reject) => {
        linkArr.forEach(element => {
            // 打印的数组内的内容
            console.log(element)
            // 加上域名,请求
            superagent.get('https://www.panasonic.com' + element, (err, res) => {
                let $ = cheerio.load(res.text)
                // 打印出该class的内容
                console.log($('.keycopy-in .header1.style-light').text())
            })
        });
    })
}
// 定义要请求的连接
var url = 'https://www.panasonic.com/de/consumer/home-entertainment/blu-ray-set-top-box/recorder.html'
// 调用定义的函数,.then方法
step1(url).then(function(val) {
    return step2(val)
})