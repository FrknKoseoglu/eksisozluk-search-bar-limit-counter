 ==UserScript==
 @name         Ekşi Sözlük Search Bar Limit Counter
 @namespace    httptampermonkey.net
 @version      0.1
 @description  try to take over the world!
 @author       FrknKoseoglu
 @match        httpseksisozluk.com
 @icon         httpswww.google.coms2faviconssz=64&domain=eksisozluk.com
 @grant        none
 ==UserScript==

 @Github httpsgithub.comFrknKoseoglu

(function() {
    'use strict';
    const searchInput = document.querySelector('#search-textbox')
    const searchForm = document.querySelector('#search-form')
    const countsLetter = document.createElement(div);
    countsLetter.setAttribute(id, count-letter);
    searchForm.prepend(countsLetter)
    countsLetter.style.cssText = positionabsolute;right15%;font-weightbold;

const count = document.getElementById('count-letter')
searchInput.onkeyup = (e) = {
  count.innerHTML = (50 - e.target.value.length);
    if(e.target.value.length  50) {
        countsLetter.style.cssText += colorred;
    }
    else if(e.target.value.length == 50 ){
    countsLetter.style.cssText += colorgreen;
    }
    else if(e.target.value.length  40){
    countsLetter.style.cssText += colororange;
    }
    else if(e.target.value.length  35){
    countsLetter.style.cssText += coloryellow;
    }
    else{
    countsLetter.style.cssText += colorunset;
    }
};

})();
