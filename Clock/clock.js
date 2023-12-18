let container = document.getElementById('container');
let displayTime = document.getElementById('displayTime');
let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2');
let checkBox = document.getElementById('inputMs');
function gettingTheDate(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();
    let greeting;
    let amOrPm;
    if(hours <= 12){
        greeting = 'Good Morning !'
    }
    else if(hours > 12 && hours < 18){
        greeting = 'Good Afternoon !'
    }
    else if(hours >= 18 && hours < 22){
        greeting = 'Good Eveninng !'
    }
    else{
        greeting = 'Good Night !'
    }

    function pad(unit){
        return unit < 10 ? "0" + unit : unit
    }
    function padms(unit){
        if(unit < 10){
            return "00" + unit;
        }
        else if(unit >= 10 && unit < 100){
            return "0" + unit
        }
        else{
            return unit
        }
    }
    if(hours < 12){
        amOrPm = 'AM';
        hours = hours % 12 || 12;
    }
    else{
        amOrPm = 'PM'
        hours = hours % 12 || 12;
    }
    hours = pad(hours);
    minutes = pad(minutes);
    seconds = pad(seconds);
    milliseconds = padms(milliseconds);
    
    if(checkBox.checked){
        displayTime.textContent = `${hours}:${minutes}:${seconds}:${milliseconds} ${amOrPm}`
    }
    else{
        displayTime.textContent = `${hours}:${minutes}:${seconds} ${amOrPm}`
    }
    para2.textContent = `${greeting}`
    para1.textContent = `It is the ${date.toDateString()}`
}
setInterval(gettingTheDate, 1)
