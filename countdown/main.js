let newYear = new Date("2021-01-01");

let d = document.getElementsByClassName('days')[0];
let h = document.getElementsByClassName('hours')[0];
let m = document.getElementsByClassName('minutes')[0];
let s = document.getElementsByClassName('seconds')[0];

function countdown(){
    let now = new Date();
    let totalSeconds = Math.floor((newYear - now) /1000)
    let days = Math.floor((totalSeconds / 3600 / 24))
    let hours = Math.floor((totalSeconds / 3600) % 24)
    let minutes = Math.floor((totalSeconds / 60) % 60)
    let seconds = Math.floor(totalSeconds % 60)
    
    d.innerText = days;
    h.innerText = hours;
    m.innerText = minutes;
    s.innerText = seconds; 
}

setInterval(countdown, 1000)


