const filter = require('./makeitmodular_filter.js')
const dir = process.argv[2]
const extension = process.argv[3]

filter(dir, extension, function doneReading(error, dirContents) {
    if (error) {
        return console.error('There was an error:', error)
    }
    dirContents.forEach(function (file){
        console.log(file)
    })
})
