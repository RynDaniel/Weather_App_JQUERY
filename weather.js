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
const msgJQ = $(".msg");
const listJQ = $(".ajax-section .cities");

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
    console.log("jquery dom is ready!");
    // localStorage.setItem("apiKey", EncryptStringAES("4d8fb5b93d4af21d66a2948710284366"));
});

//formJQ.on("submit", ()=>{});
formJQ.submit((e)=>{
    e.preventDefault();
    getWeatherDataFromApi();
});

const getWeatherDataFromApi = async() =>{
    const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
    const cityNameInput = inputJQ.val();
    const units = "metric";
    const lang = "tr";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&appid=${apiKey}&units=${units}&lang=${lang}`;
    //jquery http request
    //const response = await $.get(url);
    //const response = await $.post(url);
    await $.ajax({
            type : "GET",
            url : url,
            dataType : "json",
            success: (response) => {
                console.log(response);
                //weather card
            },
            beforeSend : (request) => {
                //parameter => headers
                //send tokenKey
            },
            complete : ()=>{},
            error : (XMLHttpRequest) =>{
                //error handling
            }
        });
    console.log(response);
}

