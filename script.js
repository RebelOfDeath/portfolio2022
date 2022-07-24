let cycle = document.querySelector(".cycle-through-phrases");
let words = cycle.getAttribute("word");
let hamMenu = document.querySelector(".ham-menu");
let navbar = document.querySelector(".navbar");
let navItems = document.querySelectorAll(".navbar-item")

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

const switchHamMenuState = () => {
    if (hamMenu.getAttribute("active") == "false") {
        hamMenu.setAttribute("active", "true");
        navbar.setAttribute("visibility", "open");
        for(let i = 0; i < navItems.length; i++){
            navItems[i].classList.remove('animate__slideOutLeft');
            navItems[i].classList.add('animate__slideInLeft');
        }
    } else {
        hamMenu.setAttribute("active", "false");
        navbar.setAttribute("visibility", "closed")
        for(let i = 0; i < navItems.length; i++){
            navItems[i].classList.remove('animate__slideInLeft');
            navItems[i].classList.add('animate__slideOutLeft');
        }
    }
    return;
}

document.querySelector(".mouse-outside").addEventListener("click", () => {
    let rect = document.querySelector(".about-me").getBoundingClientRect();

    window.scroll({
        top: rect.top + 5,
        behavior: "smooth",
    });
});

navItems.forEach((Ele) => {
    Ele.addEventListener('click', () => {
       switchHamMenuState(); 
    })
})

hamMenu.addEventListener("click", () => {
    switchHamMenuState()
});
