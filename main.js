let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        navbar.style.top = "0";  // Menü açıldığında yukarıda boşluk kalmasın
    } else {
        navbar.style.top = "-500px";  // Menü kapandığında geri yukarı kaydır
    }
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
    navbar.style.top = "-500px";  // Scroll yapıldığında menü kapanmalı
};
