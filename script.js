let hElem = document.getElementById('hour')
let mElem = document.getElementById('minute')
let sElem = document.getElementById('seconds')

setInterval(function(){
    let myTime = new Date()
    let myH = myTime.getHours()
    let myM = myTime.getMinutes()
    let myS = myTime.getSeconds()

    if (myH < 10) {
        myH = '0' + myH
    }
    if(myM < 10) {
        myM = '0' + myM
    }
    if(myS < 10) {
        myS = '0' + myS
    }

    hElem.innerHTML = myH
    mElem.innerHTML = myM
    sElem.innerHTML = myS

}, 1000)