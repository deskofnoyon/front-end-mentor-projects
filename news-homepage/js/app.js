const sideNav = document.querySelector("#nav-list");
const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
const menu = document.querySelector("#menu");


sideNav.style.right = "-800px";

mobileMenuBtn.onclick = function(){
    if (sideNav.style.right == "-800px"){
        sideNav.style.right = "-30%";
        menu.src = "./assets/images/icon-menu-close.svg";
    }
    else{
        sideNav.style.right = "-800px";
        menu.src = "./assets/images/icon-menu.svg"
    }
}