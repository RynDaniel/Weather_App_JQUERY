//write less, do more
//open source, small, cross-browser, easy ==> library
//dom access, event handler, animation(best), ajax request

const formJS = document.querySelectorAll("form")[0];
console.log(formJS);
// const formJQ =  jQuery("form");
// console.log(formJQ);
// const formJQtoJS =  $("form")[0];
// console.log(formJQtoJS);
//selectors ==> eq, th, odd, even (js+jquery)
const formJQ =  $("form").eq(0);
console.log(formJQ);
const inputJQ = $("input");
// console.log($(formJS));

//JS load event
//window.addEventListener("load", ()=>{console.log("js loaded")});
//JQUERY load event
//$(window).on("load", ()=>{console.log("jquery loaded")});
//onload, onclick ==> js + jquery

//js DOMContentloaded
// document.addEventListener("DOMContentLoaded", ()=>{console.log("js dom is ready!")});

//JQuery DOMContentloaded
// $(document).on("DOMContentLoaded", ()=>{console.log("jquery dom is ready!")});
$(document).ready(()=>{
    console.log("jquery dom is ready!")
});



