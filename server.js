const net = require('net')
const server = net.createServer()
const PORT = 1234
const mongoose = require('mongoose')

server.on('listening', function(){
    console.log(`Server started on ${PORT}`)
    connectToDb()
})

server.on('connection', function(client){
    console.log(`New client connected from ${client.remoteAddress}:${client.remotePort}`)
    client.on('data', function(data){
        console.log(data.toString())
    })
})
server.listen(PORT, 'localhost')

function connectToDb(){
    mongoose.connect('mongodb://dochat:dochatsrv@ds155699.mlab.com:55699/dochat', function(error){
        if(error) throw error
        console.log('Connected!')
    })
}