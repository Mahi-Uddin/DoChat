const Message = require('./message')
const Client = require('./client')

function addMessage(message = '', type = 1){
    document.getElementById('chat container').appendChild(message.getMessageElement(type))
}

function testMessage(){
    for(i = 1; i < 7; i++){
        addMessage(new Message('Yo, in different toasts!'), i)
    }
    for(i = 1; i < 7; i++){
        addMessage(new Message('Yo, in different toasts!'), i)
    }
}