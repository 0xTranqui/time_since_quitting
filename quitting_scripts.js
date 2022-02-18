setInterval(timeSinceQuitting, 1000);

function timeSinceQuitting() {

    const sec = 1000;
    const min = 60;
    const hour = 60;
    const day = 24;
    const month = 30.4;
    const year = 12;

    let date_quit = new Date('January 18, 2022 00:00:00');
    let date_now = new Date();

    let seconds = Math.floor((date_now - (date_quit))/sec);
    let minutes = Math.floor(seconds/min);
    let hours = Math.floor(minutes/hour);
    let days = Math.floor(hours/day);
    let months = Math.floor(days/month);
    let years = Math.floor(months/year);

    months = months-(years*12);
    days = days-(years*12*30)-(months*30);
    hours = hours-(years*12*30*24)-(months*30*24)-(days*24);
    minutes = minutes-(years*12*30*24*60)-(months*30*24*60)-(days*24*60)-(hours*60);
    seconds = seconds-(years*12*30*24*60*60)-(months*30*24*60*60)-(days*24*60*60)-(hours*60*60)-(minutes*60);

    document.getElementById("content-years").innerHTML = years;
    document.getElementById("content-months").innerHTML = months;
    document.getElementById("content-days").innerHTML = days;
    document.getElementById("content-hours").innerHTML = hours;
    document.getElementById("content-minutes").innerHTML = minutes;    
    document.getElementById("content-seconds").innerHTML = seconds;

}

timeSinceQuitting();
    
