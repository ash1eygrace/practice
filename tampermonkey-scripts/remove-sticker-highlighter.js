// this script iterates through a table and highlights all rows that contain the text 'remove sticker'

setTimeout(function() {
    var elements = document.getElementsByClassName('reporttable__event');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].innerText.includes('remove sticker')) {
            elements[i].style.backgroundColor = 'red';
        }
    }
}, 1000);     