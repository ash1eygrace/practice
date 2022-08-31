/* This mini app asks for a future date and displays how many days between now and that future date */

var form = document.querySelector('form');
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