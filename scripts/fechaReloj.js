 (function(){
let actualizarHora = function(){
    let date = new Date(),
     day = date.getDate(),
     weekDay = date.getDay(),
     month = date.getMonth(),
     year = date.getFullYear(),
     hours = date.getHours(),
     minutes = date.getMinutes(),
     seconds = date.getSeconds(),
     AMPM;

let pDay = document.getElementById("day"),
    pWeekDay = document.getElementById("weekDay"),
    pMonth = document.getElementById("month"),
    pYear = document.getElementById("year"),
    pHours = document.getElementById("hours"),
    pMinutes = document.getElementById("minutes"),
    pSeconds = document.getElementById("seconds"),
    pAMPM = document.getElementById("ampm");
    

let week = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
pWeekDay.textContent = week[weekDay]; 
pDay.textContent = day;

let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Noviembre", "Diciembre"];
pMonth.textContent = months[month];
pYear.textContent = year;

if (hours >= 12){
    hours = hours -12;
    ampm = "PM";
} else {
    ampm = "AM";
}

if (hours == 0) {
    hours = 12;
};
if (hours < 10) { hours = "0" + hours };
pHours.textContent = hours;
pAMPM.textContent = ampm;

if (minutes < 10) { minutes = "0" + minutes };
if (seconds < 10) { seconds = "0" + seconds };


pMinutes.textContent = minutes;
pSeconds.textContent = seconds;
};


actualizarHora(); 
let intervalo = setInterval(actualizarHora, 1000);

 } ())
