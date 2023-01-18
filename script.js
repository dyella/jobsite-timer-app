// Global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

// Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

// Update the timer
function timer() {
    seconds++;

    // Format out time
    let hrs = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hrs * 3600)) / 60);
    let sec = seconds % 60;

    if (sec < 10) sec = '0' + sec;
    if (min < 10) min = '0' + min;
    if (hrs < 10) hrs = '0' + hrs;

    time_el.innerText = `${hrs}:${min}:${sec}`;
}

function start() {
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00';
}

//below is chatGPT

// let timer;
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// function startTimer() {
//     timer = setInterval(() => {
//         seconds++;

//         if (seconds === 60) {
//             seconds = 0;
//             minutes++;
//         }
//         if (minutes === 60) {
//             minutes = 0;
//             hours++;
//         }

//         document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`;
//     }, 1000);
// }

// function stopTimer() {
//     clearInterval(timer);
// }

// function resetTimer() {
//     clearInterval(timer);
//     seconds = 0;
//     minutes = 0;
//     hours = 0;
//     document.getElementById("time").innerHTML = "00:00:00";
// }

function saveTimer() {
    // Save the current timer value to local storage
    localStorage.setItem("timer", document.getElementById("time").innerHTML);
}

function loadTimer() {
    // Load the saved timer value from local storage
    let savedTime = localStorage.getItem("timer");
    if (savedTime) {
        // Check if the saved time is in the correct format (HH:MM:SS)
        let timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
        if (timeRegex.test(savedTime)) {
            document.getElementById("time").innerHTML = savedTime;
            let timeValues = savedTime.split(":");
            hours = parseInt(timeValues[0]);
            minutes = parseInt(timeValues[1]);
            seconds = parseInt(timeValues[2]);
        } else {
            // If the saved time is not in the correct format, display an error message
            alert("Error: Invalid time format. Please make sure the time is in the format HH:MM:SS.");
        }
    } else {
        // If no saved time is found, display an error message
        alert("Error: No saved time found.");
    }
}

function deleteTimer() {
    // Delete the saved timer value from local storage
    localStorage.removeItem("timer");
    resetTimer();
}


// drop-down option for each timer
var menuIcon = document.querySelector(".menu-icon");
var menuContent = document.querySelector(".menu-content");

menuIcon.addEventListener("click", function () {
    menuContent.style.display = (menuContent.style.display === "block") ? "none" : "block";
});