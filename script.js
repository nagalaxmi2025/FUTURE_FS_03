function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({behavior:"smooth"});
}

function sendMessage(e){
    e.preventDefault();

    document.getElementById("success").innerText =
    "✅ Message Sent Successfully! We will contact you soon.";

    document.querySelector("form").reset();
}
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);
function toggleDark(){
    document.body.classList.toggle("dark");
}