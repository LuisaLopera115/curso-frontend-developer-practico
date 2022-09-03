const menuEmail= document.querySelector('.navbar-email');
const destokeMenu = document.querySelector('.desktop-menu');

const burguerMenu= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCarIconMobile= document.querySelector('.navbar-shopping-cart');
const itemsInCarMobile=document.querySelector('.product-detail');

const cardsContainer= document.querySelector('.cards-container');

menuEmail.addEventListener('click',ToogleDeskmanu);
burguerMenu.addEventListener('click',ToogleMobilekmanu);
shoppingCarIconMobile.addEventListener('click',ToggleItemsInCarMobile);

function ToogleDeskmanu(){
    if (!itemsInCarMobile.classList.contains('inactive')) {
        itemsInCarMobile.classList.add('inactive')
    }
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
    }else if(!destokeMenu.classList.contains('inactive')){
        destokeMenu.classList.add('inactive')
    }
    console.log('ToggleItemsInCarMobile cliked');
    itemsInCarMobile.classList.toggle('inactive');
} 


const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 240,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Bolso',
    price: 150,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 900,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bicicleta',
    price: 240,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Bolso',
    price: 150,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 900,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 

/*<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
*/

for (product of productList) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    cardsContainer.appendChild(productCard);

    const img = document.createElement('img');
    img.setAttribute('src',product.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText='$' + product.price;

    const productName = document.createElement('p');
    productName.innerText='$' + product.name;

    productDiv.appendChild(productPrice);
    productDiv.appendChild(productName);

    const productFigureImage = document.createElement('figure');
    const carShoppingButton = document.createElement('img');
    carShoppingButton.setAttribute('src','./icons/bt_add_to_cart.svg');

    productFigureImage.appendChild(carShoppingButton);
    productInfo.appendChild(productDiv);
    productInfo.appendChild(productFigureImage);
    
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
}




