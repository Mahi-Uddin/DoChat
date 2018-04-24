module.exports = class Message {
    constructor(message) {
        this.message = message;
        this.time = this.getCurrentTime();
    }
    getMessage() {
        return this.message;
    }
    getTime() {
        return this.time;
    }
    getMessageElement(type){
      let classType = 'none'
      switch(type){
        case 1:
            classType = 'you first'
            break
        case 2:
            classType = 'you mid'
            break
        case 3:
            classType = 'you last'
            break
        case 4:
            classType = 'friend first'
            break
        case 5:
            classType = 'friend mid'
            break
        case 6:
            classType = 'friend last'
            break
        default:
            break
      }
      let timeSpan = document.createElement('span')
      timeSpan.setAttribute('class', 'time')
      timeSpan.innerHTML = this.getTime()
      let msgSpan = document.createElement('span')
      msgSpan.setAttribute('class', classType)
      msgSpan.innerHTML = this.getMessage()
      msgSpan.appendChild(timeSpan)
      return msgSpan
    }
    getMessageHtml(type){
        switch(type){
           case 1:
          return
          `<span class="you first">
           ${this.getMessage()}
           <span class="time">
             ${this.getTime()}
           </span>
          </span>`
            break
            case 2:
            return
          `<span class="you mid">
           ${this.getMessage()}
           <span class="time">
             ${this.getTime()}
           </span>
          </span>`
            break
            case 3:
            return
          `<span class="you last">
           ${this.getMessage()}
           <span class="time">
             ${this.getTime()}
           </span>
          </span>`
            break
            case 4:
            return
          `<span class="friend first">
           ${this.getMessage()}
           <span class="time">
             ${this.getTime()}
           </span>
          </span>`
            break
            case 5:
            return
          `<span class="friend mid">
           ${this.getMessage()}
           <span class="time">
             ${this.getTime()}
           </span>
          </span>`
            break
            case 6:
            return
          `<span class="friend last">
           ${this.getMessage()}
           <span class="time">
             ${this.getTime()}
           </span>
          </span>`
            break
            default:
            break
        }
    }
    getCurrentTime() {
        let d = new Date();
        let t = "AM";
        let h = d.getHours();
        if (h > 12) {
            h -= 12;
            t = "PM";
        }
        if (h == 0) {
            h = 12;
        }
        if(h.toString().split().length = 1){
          h = '0' + h.toString()
        }
        let m = d.getMinutes();
        if(m.toString().split().length = 1){
          m = '0' + m.toString()
        }
        return (h + ':' + m + ' ' + t);
    }
}