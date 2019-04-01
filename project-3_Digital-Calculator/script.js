function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getMinutes();
    let day = date.getDay();

    if (hours.length < 2) {
        hours = '0' + hours;
    }
    
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    
    if (seconds.length < 2) {
        seconds = '0000' + seconds;
    }
  

    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let clock = weekDays[day]+ ' ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clock;

    let sec = date.getSeconds();
    if (sec.length > 1) {
        sec = '0000' + sec;
    }
  
    //console.log(sec);
   
}

digitalClock();

setInterval(digitalClock, 1000);