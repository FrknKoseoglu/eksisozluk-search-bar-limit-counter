// ==UserScript==
// @name         Ekşi Sözlük Search Bar Limit Counter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Daha iyi bir Ekşi Sözlük Deneyimi!
// @author       FrknKoseoglu
// @match        https://eksisozluk.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=eksisozluk.com
// @grant        none
// @license      MIT
// ==/UserScript==
 
// @Github https://github.com/FrknKoseoglu/
 
(function() {
    'use strict';
    const searchInput = document.querySelector('#search-textbox')
    const searchForm = document.querySelector('#search-form')
    const countsLetter = document.createElement("div");
    countsLetter.setAttribute("id", "count-letter");
    searchForm.prepend(countsLetter)
    countsLetter.style.cssText = "position:absolute;right:15%;font-weight:bold;"
 
const count = document.getElementById('count-letter')
searchInput.onkeyup = (e) => {
  count.innerHTML = (50 - e.target.value.length);
    if(e.target.value.length > 50) {
        countsLetter.style.cssText += "color:red;"
    }
    else if(e.target.value.length == 50 ){
    countsLetter.style.cssText += "color:green;"
    }
    else if(e.target.value.length > 40){
    countsLetter.style.cssText += "color:orange;"
    }
    else if(e.target.value.length > 35){
    countsLetter.style.cssText += "color:yellow;"
    }
    else{
    countsLetter.style.cssText += "color:unset;"
    }
};
 
})();
