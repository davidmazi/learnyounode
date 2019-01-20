const net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now() {
    const d = new Date()
    return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

// const net = require('net')
// const port = process.argv[2]
// const d = new Date()

// const server = net.createServer(function (socket) {
//     socket.end(localTime() + '\n')
// })

// server.listen(port)

// function fillZeros(i) {
//     if (i < 10) { return '0' + i }
//     else { return '' + i }
// }

// function localTime() {
//     return d.getFullYear() + "-" +
//         fillZeros(d.getMonth() + 1) + '-' +
//         fillZeros(d.getDate()) + ' ' +
//         fillZeros(d.getHours()) + ':' +
//         fillZeros(d.getMinutes())
// }