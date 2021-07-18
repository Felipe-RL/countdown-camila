const birthday = "Oct 17 2021";

let countdown = setInterval(() => {
    let time = new Date(birthday).getTime() - new Date().getTime(),
        days = Math.floor(time/(1000*60*60*24)),
        hours =Math.floor((time/(1000*60*60))%24),
        mins = Math.floor((time/(1000*60))%60),
        secs = Math.floor((time/1000)%60);

    days = formatTime(days);
    hours = formatTime(hours);
    mins = formatTime(mins);
    secs = formatTime(secs);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('mins').textContent = mins;
    document.getElementById('secs').textContent = secs;

    if(time < 0) {
        clearInterval(countdown);
    }

},1000); 

function formatTime(time) {
    return time < 10 ? `0${time}` : time; 
}

