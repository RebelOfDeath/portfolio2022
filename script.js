let cycle = document.querySelector(".cycle-through-phrases");
let words = cycle.getAttribute("word");
let hamMenu = document.querySelector(".ham-menu");

words = words.split(",");
let i = 0;
setTimeout(function cycleWords() {
    cycle.innerHTML = words[i];
    i = (i + 1) % words.length;
    setTimeout(cycleWords, 2000);
}, 2);

document.querySelector(".screenshot-website").addEventListener("click", () => {
    window.open("https://www.arduinoproject.ga/");
});

document.querySelector(".mouse-outside").addEventListener("click", () => {
    let rect = document.querySelector(".about-me").getBoundingClientRect();

    window.scroll({
        top: rect.top + 5,
        behavior: "smooth",
    });
});

hamMenu.addEventListener("click", () => {
    if (hamMenu.getAttribute("active") == "false") {
        hamMenu.setAttribute("active", "true");
    } else {
        hamMenu.setAttribute("active", "false");
    }
});
