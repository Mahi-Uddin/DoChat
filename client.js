const superagent = require('superagent')
let PORT = 5000

module.exports.login = function login(username, password){
    superagent.get(`http://localhost:5000/api/login/${username}/${password}`, (err, res) => {
        let strData = res.text
        console.log(res.text)
        let packetType = strData.split('<s>')[0]
        let params = strData.split('<s>').slice(1, strData.split('<s>').length)
        console.log(packetType)
        console.log(params)
        switch (packetType) {
            case 'logMessage':
                if (params[0]) {
                    let infoMessages = document.getElementById('infoMessages')
                    let messageElement = infoMessages.getElementsByTagName('p').item(0)
                    messageElement.innerHTML = params[0]
                    console.log(messageElement)
                    if (params[0].indexOf('Login successful!') >= 0) {
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
}

module.exports.signup = function signup(fullname, email, username, password){
    superagent.get(`http://localhost:5000/api/signup/${fullname}/${email}/${username}/${password}`, (err, res) => {
        let strData = res.text
        console.log(res.text)
        let packetType = strData.split('<s>')[0]
        let params = strData.split('<s>').slice(1, strData.split('<s>').length)
        console.log(packetType)
        console.log(params)
        switch (packetType) {
            case 'logMessage':
                if (params[0]) {
                    let infoMessages = document.getElementById('infoMessages')
                    let messageElement = infoMessages.getElementsByTagName('p').item(0)
                    messageElement.innerHTML = params[0]
                    console.log(messageElement)
                    if (params[0].indexOf('Login successful!') >= 0) {
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
}

module.exports.sendActivationMail = function(){
    return sendActivationMail()
}

function sendActivationMail(username){
    if(!username){
        username = document.getElementById('username').value
    }
    superagent.get(`http://localhost:5000/api/activation/${username}`, (err, res) => {
        let strData = res.text
        console.log(res.text)
        let packetType = strData.split('<s>')[0]
        let params = strData.split('<s>').slice(1, strData.split('<s>').length)
        console.log(packetType)
        console.log(params)
        switch (packetType) {
            case 'logMessage':
                if (params[0]) {
                    let infoMessages = document.getElementById('infoMessages')
                    let messageElement = infoMessages.getElementsByTagName('p').item(0)
                    messageElement.innerHTML = params[0]
                    console.log(messageElement)
                }
                break
            default:
                console.log('Unknown packet type received', packetType)
                break
        }
    })
}
