/*
1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
document.getElementById("content").innerHTML = `<p>Today is: <span id="day"></span>.</p><p>Current time is: <span id="time"></span>.</p>`;

const day = document.getElementById('day');
const time = document.getElementById('time');
day.innerText = new Date().toLocaleString('en-US', { weekday: 'long' });
time.innerText = new Date().toLocaleTimeString();

/* This mini app asks for a future date and displays how many days between now and that future date */
var form = document.querySelector('content');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var date = document.querySelector('input[type="date"]').value;
    var today = new Date();
    var future = new Date(date);
    var days = Math.ceil((future - today) / (1000 * 60 * 60 * 24));
    var p = document.createElement('p');
    p.innerHTML = 'There are ' + days + ' days until ' + date;
    document.body.appendChild(p);
});

/* Displays the current time on the screen and cycles through it */
const displayTime = () => {
    const today = new Date();
    const day = today.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const amPm = today.getHours() >= 12 ? "PM" : "AM";
    document.getElementById("content").innerHTML = `Today is: ${dayNames[day]}, ${today.getDate()}, ${today.getFullYear()}<br>Current time is: ${time} ${amPm}`;
}
setInterval(displayTime, 1000);

