const Client = require('./client')

function login(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    Client.login(username, password)
}

function signup(){
    let fullname = document.getElementById('name').value
    let email = document.getElementById('email').value
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    Client.signup(fullname, email, username, password)
}