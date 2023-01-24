/* 

This is a script I made to aid my team at my job. 

It searches the innerHTML of the log details column for
failed, importing, or finished and highlights the text
with a color to make parsing longer logs easier and detecting
failures more efficient.


// ==UserScript==
// @name         Status Log Highlighter
// @version      1.0
// @description  This scriipt highlights the status of each file to quickly identify finished, failed, and imorting files.
// @author       ash1eygrace
// @match        https://mc.REDACTED.com/import/?blog_id=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=REDACTED.com
// @grant        none
// @updateURL    REDACTED
// ==/UserScript==

let count = 0;
const waitElementLoad = setInterval(function() {
    count++;
    if (count > 99) {
        clearInterval(waitElementLoad);
    }
    let logDetailsColumn = document.getElementsByTagName('pre');

    if (logDetailsColumn.length) {
        clearInterval(waitElementLoad);


        for (let i = 0; i < logDetailsColumn.length; i++) {
            let failedText = logDetailsColumn[i].innerHTML;
            failedText = failedText.replace(/(\[status\] =&gt; failed)/g, '<span style="background-color:#FF7C82">$1</span>');
            logDetailsColumn[i].innerHTML = failedText;

            let importingText = logDetailsColumn[i].innerHTML;
            importingText = importingText.replace(/(\[status\] =&gt; importing)/g, '<span style="background-color:#ffec80">$1</span>');
            logDetailsColumn[i].innerHTML = importingText;

            let finishedText = logDetailsColumn[i].innerHTML;
            finishedText = finishedText.replace(/(\[status\] =&gt; finished)/g, '<span style="background-color:#61cf40">$1</span>');
            logDetailsColumn[i].innerHTML = finishedText;
        }
}
}, 200);