const daysElement = document.getElementById('day');
const hoursElement = document.getElementById('hour');
const minutesElement = document.getElementById('minute');
const secondsElement = document.getElementById('second');

const birthday = '15 Sep 2021';

function countdown() {

    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalSegundo = (birthdayDate - currentDate) / 1000;
    
    /*transformando em horas */
    const dias = Math.floor(totalSegundo / 3600 / 24);
    const hora = Math.floor(totalSegundo / 3600) % 24;
    const minuto = Math.floor(totalSegundo / 60) %60;   
    const segundo = Math.floor(totalSegundo) % 60;

    daysElement.innerHTML = dias;
    hoursElement.innerHTML = formatTime(hora);
    minutesElement.innerHTML = formatTime(minuto);
    secondsElement.innerHTML = formatTime(segundo);

}


/* faz com que se o numero for menor que dez o zero apareça na frente  */
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000)