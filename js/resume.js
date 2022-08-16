let sidebar = document.querySelector(".sidebar");
let hamburger = document.querySelector(".hamburger");
let ham = document.querySelector(".ham");
let cross = document.querySelector(".cross");
let main = document.querySelector(".main");
let mq = window.matchMedia("(max-width: 430px)");

ham.style.display = "none";

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("sidehide");
  if (sidebar.classList.contains("sidehide")) {
    //if sidebar is hidden

    cross.style.display = "none";
    ham.style.display = "inline";

    if (mq.matches) {
      main.style.width = "200%";
      main.style.height = "200%";
    } else {
      //for full screen with no sidebar
      main.style.height = "100%";
      main.style.width = "100%";
    }
  } else {
    //if sidebar is not hidden

    ham.style.display = "none";
    setTimeout(() => {
      cross.style.display = "inline";
    }, 200);

    if (mq.matches) {
      main.style.width = "200%";
      main.style.height = "100%";
    } else {
      //for full screen with sidebar
      main.style.height = "100%";
      main.style.width = "100%";
    }
  }
});
