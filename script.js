var birthday = "2023-09-04";
function assign_birthday() {

    birthday = document.getElementById('birth-date').value;

}


const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

function countdown() {
    const birthday_date = new Date(birthday);
    const currentDate = new Date();
    console.log(birthday);

    console.log('Birthday before today: ',  birthday_date < currentDate);
    if (birthday === "") {
        document.getElementById('error-message').style.display = "block";
        console.log("BLANK BIRTHDAY");
        daysEL.innerHTML = "0";
        hoursEL.innerHTML = "0";
        minsEL.innerHTML = "0";
        secondsEL.innerHTML = "0";
    }
    else if (birthday_date <= currentDate){
        h1EL = document.getElementById('birthday-wish');
        h1EL.innerHTML = "Happy Belated Birthay";
        daysEL.innerHTML = "0";
        hoursEL.innerHTML = "0";
        minsEL.innerHTML = "0";
        secondsEL.innerHTML = "0";
    }
    else {
        h1EL = document.getElementById('birthday-wish');
        h1EL.innerHTML = "Birthday Countdown";
        const totalSeconds = (birthday_date - currentDate) / 1000;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds % 60);
        console.log([days, hours, minutes, seconds]);

        console.log(days !== NaN && hours !== NaN && minutes !== NaN && seconds !== NaN);
        daysEL.innerHTML = days;
        hoursEL.innerHTML = hours;
        minsEL.innerHTML = minutes;
        secondsEL.innerHTML = seconds;
    }
}
countdown();
setInterval(countdown, 1000);