function displayTime(){
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var days = weekday[date.getDay()];
    

    var meridiem = document.getElementById("ampm");

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;
    document.getElementById("day").innerHTML = days;

    if(hrs > 12){
        meridiem.innerHTML = "PM";
    }else{
        meridiem.innerHTML = "AM";
    }
}

setInterval(displayTime, 1000);