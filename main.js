const menuEmail= document.querySelector('.navbar-email');
const destokeMenu = document.querySelector('.desktop-menu');

const burguerMenu= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',ToogleDeskmanu);
burguerMenu.addEventListener('click',ToogleMobilekmanu);

function ToogleDeskmanu(){
    console.log('desktopmenu cliked');
    destokeMenu.classList.toggle('inactive');
}

function ToogleMobilekmanu(){
    console.log('Mobiletopmenu cliked');
    mobileMenu.classList.toggle('inactive');
}   
