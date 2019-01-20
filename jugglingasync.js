// const http = require('http')
// const url1 = process.argv[2]
// const url2 = process.argv[3]
// const url3 = process.argv[4]
// const bl = require('bl')
// var loadedURLs = 0
// var dataStr1 = ""
// var dataStr2 = ""
// var dataStr3 = ""

// http.get(url1, function (response) {
//     response.setEncoding("utf8")
//     response.pipe(bl(function (err, data) {
//         if (err) { console.error(err) }
//         dataStr1 = data.toString()
//         loadedURLs++
//         if (loadedURLs == 3) { printOutput() }
//     }))
// })

// http.get(url2, function (response) {
//     response.setEncoding("utf8")
//     response.pipe(bl(function (err, data) {
//         if (err) { console.error(err) }
//         dataStr2 = data.toString()
//         loadedURLs++
//         if (loadedURLs == 3) { printOutput() }
//     }))
// })

// http.get(url3, function (response) {
//     response.setEncoding("utf8")
//     response.pipe(bl(function (err, data) {
//         if (err) { console.error(err) }
//         dataStr3 = data.toString()
//         loadedURLs++
//         if (loadedURLs == 3) { printOutput() }
//     }))
// })

// function printOutput() {
//     console.log(dataStr1)
//     console.log(dataStr2)
//     console.log(dataStr3)
// }

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}