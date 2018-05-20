const Client = require('./client')

function login() {
    if (Client) {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        Client.login(username, password)
    }
    else {
        console.log(Client)
    }
}

function signup(){
    let fullname = document.getElementById('name').value
    let email = document.getElementById('email').value
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    Client.signup(fullname, email, username, password)
}

function sendActivationMail(){
    let username = document.getElementById('username').value
    Client.sendActivationMail(username)
}