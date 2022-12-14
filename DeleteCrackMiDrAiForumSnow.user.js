// ==UserScript==
// @name         Delete CrackMiDrAi Forum Snow
// @namespace    https://bbs.midrai.cn/
// @version      0.1-beta2
// @description  Deletes all canvas elements on CrackMiDrAi Forum.
// @author       chatGPT
// @match        https://bbs.midrai.cn/*
// @grant        none
// ==/UserScript==

//Delete all canvas elements on the page
var elements = document.getElementsByTagName('canvas');
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
}
