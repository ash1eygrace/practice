/* 

A script I made to make a task at work have better UX. 
Essentially it grabs the color of the dot that indicates if a site is graylisted 
or not and applies it to the header background to make the graylist more apparent.
And also changes the header to "Deleted site" if the site is deleted.

*/

// ==UserScript==
// @name         REDACTED Graylist Background Color
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  This script changes the background color of the page title and sticky header on REDACTED if the site is graylisted or the site is deleted. This is to help differentiate between graylisted and non-graylisted sites when working on Lossless imports.
// @author       ash1eygrace
// @match        https://REDACTED/tools/reportcard/blog/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=REDACTED.com
// @grant        none
// @updateURL    REDACTED
// @require      https://code.jquery.com/jquery-1.12.4.js
// ==/UserScript==

/* Changed color of header background to the color of the blog gaylisted dot*/
let dotColor = document.querySelector('h1 strong').style.color;
document.querySelector('h1.page-title').style.backgroundColor = dotColor;
document.querySelector('.reportcard__sticky-head').style.backgroundColor = dotColor;

/* Changes color of header background to red and header to Deleted Site if blog is deleted*/
if (document.querySelector(".reportcard-box-inside").innerHTML.includes("<strong>deleted</strong>")) {
    document.querySelector(".page-title").style.backgroundColor = "#ff7c82";
    document.getElementsByTagName('h1')[0].innerText = 'Deleted site';
}