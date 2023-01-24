/* 

I creted this script to making idientifying downgrades easier in our logs.
It highlights events "downgrade started" and "finished," to make them easier to spot.
Also adds actual date and time vs only releative time to cross reference times in our 
other logs a simple copy, paste and Command + F.
*/

// ==UserScript==
// @name         BRC Revert Helper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Highlights events "downgrade started" and "finished," and adds actual date and time vs only releative time.
// @author       ash1eygrace
// @match        https://mc.REDACTED.com/tools/account/blog/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=REDACTED.com
// @require      https://code.jquery.com/jquery-1.12.4.js
// @downloadURL  REDACTED
// @updateURL    REDACTED
// @grant        none
// @require      https://gist.githubusercontent.com/username/123/raw/123/trackUsage
// ==/UserScript==

let counter = 0;
const waitElementLoad = setInterval(function() {
    counter++;
    if (counter > 99) {
        clearInterval(waitElementLoad);
    }
    const timeStamps = document.getElementsByClassName("time");
    if (timeStamps.length) {
        clearInterval(waitElementLoad);

    // Highlights downgrade started and finished in Audit Trail
    const elements = document.getElementsByClassName("time");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].innerText.includes("finished")) {
            elements[i].style.backgroundColor = "#FF7C82";
        }
        if (elements[i].innerText.includes("downgrade started")) {
            elements[i].style.backgroundColor = "#FFEC80";
        }
    }

   // show timestamps as relative and actual date and time
   for (let t = 0; t < timeStamps.length; t++) {
      timeStamps[t].innerText += " ( " + timeStamps[t].getAttribute("title") + " )";
   }

}
}, 200);