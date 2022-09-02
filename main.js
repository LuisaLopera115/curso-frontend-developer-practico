const menuEmail= document.querySelector('.navbar-email');
const destokeMenu = document.querySelector('.desktop-menu');

const burguerMenu= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCarIconMobile= document.querySelector('.navbar-shopping-cart');
const itemsInCarMobile=document.querySelector('.product-detail');

menuEmail.addEventListener('click',ToogleDeskmanu);
burguerMenu.addEventListener('click',ToogleMobilekmanu);
shoppingCarIconMobile.addEventListener('click',ToggleItemsInCarMobile);

function ToogleDeskmanu(){
    console.log('desktopmenu cliked');
    destokeMenu.classList.toggle('inactive');
}

function ToogleMobilekmanu(){

    if (!itemsInCarMobile.classList.contains('inactive')) {
        itemsInCarMobile.classList.add('inactive')
    }
    console.log('Mobiletopmenu cliked');
    mobileMenu.classList.toggle('inactive');
}  

function ToggleItemsInCarMobile(){

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive')
    }
    console.log('ToggleItemsInCarMobile cliked');
    itemsInCarMobile.classList.toggle('inactive');
} 




