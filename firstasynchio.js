const fs = require('fs')
const file = process.argv[2]
fs.readFile(file, function doneReading(error, fileContents) {
    if (error) { return console.log(error) }
    const lines = fileContents.toString().split('\n').length - 1
    console.log(lines)
})