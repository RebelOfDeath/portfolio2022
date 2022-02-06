let cycle = document.querySelector('.cycle-through-phrases');
let words = cycle.getAttribute('word');

words = words.split(",");
let i = 0;
setTimeout(function cycleWords(){
    cycle.innerHTML = words[i];
    i = (i+1) % words.length;
    setTimeout(cycleWords, 2000);
}, 2);

document.querySelector('.screenshot-website').addEventListener('click', ()=>{
    window.open("https://www.arduinoproject.ga/"); 
})

