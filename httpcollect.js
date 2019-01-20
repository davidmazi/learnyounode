const http = require('http')
const url = process.argv[2]
const bl = require('bl')

http.get(url, function (response){
    response.setEncoding("utf8")
    response.pipe(bl(function(err, data){
        if(err){console.error(err)}
        const dataStr = data.toString()
        console.log(dataStr.length)
        console.log(dataStr)
    }))
})