const mark = document.getElementById("mark-all")
const number = document.getElementById("notice-number")
let dots = document.querySelectorAll(".dot")
let displays = document.querySelectorAll(".active")

mark.addEventListener("click",()=>{

    dots.forEach((dot)=>{
        dot.style.display = "none";
    })
    displays.forEach((display)=>{
        display.style.backgroundColor="white"
    })
    number.classList.add("hidden");
})
