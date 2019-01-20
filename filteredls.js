const fs = require('fs')

const path = process.argv[2]
const extension = process.argv[3]

fs.readdir(path, function doneReading(err, dirContents) {
    var correctFileNames = []
    if (err) { return console.log(err); }
    for (var i = 0; i < dirContents.length; i++) {
        if (dirContents[i].split('.')[1] == extension) {
            correctFileNames.push(dirContents[i])
        }
    }
    for (var i = 0; i < correctFileNames.length; i++) {
        console.log(correctFileNames[i])
    }
})