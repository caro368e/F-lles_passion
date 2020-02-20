let alleBokse = [];
const endpoint = "https://spreadsheets.google.com/feeds/list/1vOHWbUA6Mg-QQ3r0N3PpWGCtvbjTYtFPFhHHuhAcEUs/od6/public/values?alt=json";
let filter = "alle";

window.addEventListener("load", navShow);


function navShow() {
    console.log("navShow");
    document.querySelector(".burger").addEventListener("click", burgerClick);
}

function burgerClick() {
    console.log("burgerClick");
    document.querySelector(".nav_links").classList.toggle("nav-active");
    document.querySelector(".nav_links").classList.toggle("drop");
    document.querySelector("#burger_list").classList.toggle("hidden");
}



document.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("site has loaded");
    hentData();
    addListenersToButtons();
}

//funktion som henter data
async function hentData() {
    console.log("hentData");
    const response = await fetch(endpoint);
    alleBokse = await response.json();
    visStil();
}

//funktion som skal vise boksene med hver japansk stil
function visStil() {

}



//funktion der gør at man kan klikke på filtreringsknapperne
function addListenersToButtons() {
    document.querySelectorAll(".filter").forEach(elm => {
        elm.addEventListener("click", filtrering);
    })
}

//funktion som filtrerer
function filtrering() {}
