window.addEventListener("load", navShow);


function navShow() {
    console.log("navShow");
    document.querySelector(".burger").addEventListener("click", burgerClick);
}

function burgerClick() {
    console.log("burgerClick");
    document.querySelector(".nav_links").classList.toggle("nav-active");
    document.querySelector(".nav_links").classList.toggle("drop");
}
