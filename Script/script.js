let time = 5;
let currentNewsIndex = 0;
let news = document.querySelectorAll("#newsLoop a");
let max = news.length;


function nextNew(){
    news[currentNewsIndex].classList.remove("selected");
    currentNewsIndex++;
    if(currentNewsIndex >= max){
        currentNewsIndex = 0};
    news[currentNewsIndex].classList.add("selected");
}

function start(){
    setInterval(() => {
        nextNew()
    }, time * 1000);
}

window.addEventListener("load", start);

