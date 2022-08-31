/* display the current day and time in the #content div of the index.html page example:
Today is: Wednesday 31, 2022
Current time is: 7:20AM */
const displayTime = () => {
    const today = new Date();
    const day = today.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const amPm = today.getHours() >= 12 ? "PM" : "AM";
    document.getElementById("content").innerHTML = `Today is: ${dayNames[day]}, ${today.getDate()}, ${today.getFullYear()}<br>Current time is: ${time} ${amPm}`;
}
setInterval(displayTime, 1000);