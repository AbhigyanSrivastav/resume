let sidebar = document.querySelector(".sidebar");
let hamburger = document.querySelector(".hamburger");
let ham = document.querySelector(".ham");
let cross = document.querySelector(".cross");
let main = document.querySelector(".main");
let container= document.querySelector(".container");
let mq = window.matchMedia("(max-width: 430px)");

ham.style.display = "none";

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("sidehide");
});
