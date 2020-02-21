let alleStile = [];
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
    alleStile = await response.json();
    visStil();
}

//funktion som skal vise boksene med hver japansk stil
function visStil() {
    const container = document.querySelector("#data_container");
    const stilTemplate = document.querySelector("template");
    container.textContent = "";

    alleStile.feed.entry.forEach(stil => {
        if (filter == "alle" || filter == stil.gsx$kategori.$t) {
            let klon = stilTemplate.cloneNode(true).content;

            //forkorter lang string så man klikker for at læse mere
            let str = stil.gsx$lang.$t;
            let cut = str.slice(0, 45) + " [...]";
            klon.querySelector(".lang").textContent = cut;


            klon.querySelector(".navn").textContent = stil.gsx$navn.$t;
            //klon.querySelector(".lang").textContent = stil.gsx$lang.$t;
            //klon.querySelector(".udseende").textContent = stil.gsx$udseende.$t;
            klon.querySelector("img").src = "japan_img/imgs/" + stil.gsx$billede.$t + ".jpg";
            klon.querySelector("img").alt = "billede af " + stil.gsx$navn.$t;

            klon.querySelector(".oversigt").addEventListener("click", () => {
                location.href = `single.html?id=${stil.gsx$id.$t}`;
            });

            container.appendChild(klon);
        }
    })
}



//funktion der gør at man kan klikke på filtreringsknapperne
function addListenersToButtons() {
    document.querySelectorAll(".filter").forEach(elm => {
        elm.addEventListener("click", filtrering);
    })
}

//funktion som filtrerer
function filtrering() {
    filter = this.dataset.substil;
    console.log(filter);
    document.querySelector(".kategori_indhold h1").textContent = this.textContent;
    document.querySelectorAll(".filter").forEach(elm => {
        elm.classList.remove("valgt");
    })
    this.classList.add("valgt");
    visStil();
}
