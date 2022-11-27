'use strict';
const timer = () => {
    let dateNow = new Date()
    let newYear = new Date(dateNow.getFullYear() + 1, 0)
    const sayHello = document.querySelector('.hello')
    const timeToday = document.querySelector('.time-today')
    const timeNow = document.querySelector('.time-now')
    const timeNewYear = document.querySelector('.new-year')

    const options = { weekday: 'long'}
    const day = dateNow.toLocaleString('ru-RU', options);

    if (dateNow.getHours() >= 6 && dateNow.getHours() < 12) sayHello.textContent = 'Доброе утро!';
    if (dateNow.getHours() >= 12 && dateNow.getHours() < 18) sayHello.textContent = 'Добрый день!';  
    if (dateNow.getHours() >= 18 && dateNow.getHours() < 23) sayHello.textContent = 'Добрый вечер!';

    timeToday.textContent = day.charAt(0).toUpperCase() + day.slice(1)

    timeNow.textContent = dateNow.toLocaleTimeString('en-US')

    const newYears = Math.floor((newYear.getTime() - dateNow.getTime())/(1000 * 60 * 60 * 24))

    if(newYears.toString().slice(-1) >= '5') timeNewYear.textContent = 'осталось ' + newYears + ' дней';
    if(newYears.toString().slice(-1) == '1') timeNewYear.textContent = 'остался ' + newYears + ' день';
    if(newYears.toString().slice(-1) >= '2' && newYears.toString().slice(-1) <= '4') timeNewYear.textContent = 'осталось ' + newYears + ' дня';
}
setInterval(() => {
    timer()
}, 1000);