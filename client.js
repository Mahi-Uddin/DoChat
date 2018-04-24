let net = require('net')
const client = new net.Socket()
let PORT = 1234

client.on('data', function(data){
    let strData = data.toString()
    console.log(strData)
    let packetType = strData.split('<s>')[0]
    let params = strData.split('<s>').slice(1, strData.split('<s>').length)
    switch(packetType){
        case 'logMessage':
        if(params[0] != 'success'){
            let infoMessages = document.getElementById('infoMessages')
            let messageElement = infoMessages.getElementsByTagName('p').item(0)
            messageElement.innerHTML = params[0]
            console.log(messageElement)
            if(params[0].indexOf('successful') >= 0){
                window.location.href = 'index.html'
                
            }
        }
        break
        default:
        console.log('Unknown packet type received', packetType)
        client.write('Unknown packet type received ' + packetType)
        break
    }
})
client.on('connect', function(){
    console.log(`Connected to ${client.remoteAddress}:${client.remotePort}`)
    setInterval(update, 1000)
})

function connect(){
    client.connect(PORT, 'localhost')
}

function send(){
    let data = document.getElementById('dataToSend').value
    client.write(data)
}

function update(){

}

module.exports.login = function login(username, password){
    let loginPacket = ''
    loginPacket += 'login'
    loginPacket += '<s>'
    loginPacket += username
    loginPacket += '<s>'
    loginPacket += password
    client.write(loginPacket)
}

module.exports.signup = function signup(fullname, email, username, password){
    let loginPacket = ''
    loginPacket += 'signup'
    loginPacket += '<s>'
    loginPacket += fullname
    loginPacket += '<s>'
    loginPacket += email
    loginPacket += '<s>'
    loginPacket += username
    loginPacket += '<s>'
    loginPacket += password
    client.write(loginPacket)
}

connect()