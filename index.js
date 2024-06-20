let cart = document.querySelector(".open-cart");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let number = document.getElementById("number");
let numberSelected = 1;
let profile = document.querySelector(".profile");
let profileBar = document.querySelector(".profileBar");
let cards = document.querySelectorAll(".card");
let mainImg = document.getElementById("mainImg");
let image1 = document.querySelector(".image1");
let account = document.querySelector(".account");
let accountStuff = document.querySelector(".account-stuff");
let checkout = document.querySelector(".checkout")

console.log(mainImg);
cards.forEach(function(item) {
    item.addEventListener('click', openProfileBar);
});
function Products(img, productInfo, price, id){
    this.img = img;
    this.productInfo = productInfo;
    this.price = price;
    this.id = id;
}
let items = document.querySelector(".items");
let sneakers = new Products("/ecommerce-product-page-main/images/image-product-1.jpg","Fall Limited Edition Sneakers", "$125.00")
cart.style.scale = "0";
function openCart(){
    if(cart.style.scale == "0"){
        cart.style.scale = "1"
    }else{
        cart.style.scale = "0"
    }
}

// increasing the buying number
let amountSelected = 0;

// function addMin(event){
//     let clickedButton = event.target;

//     if(clickedButton.id == "plus"){
//         amountSelected +1;
//     }else if(clickedButton.id == "minus" && amountSelected != 0){
//         amountSelected -1;
//     }
// }

// vertically position the items;


function add(){
    amountSelected += 1;
    number.innerHTML = amountSelected;
    numberSelected +=1

    console.log(numberSelected);

}
function min(){
    if(amountSelected > 0){
        amountSelected -=1;
        numberSelected -=1
        number.innerHTML = amountSelected;
        
    }
    return amountSelected
}
let index = 0
let itemsSelected = []
function addToCart(){
    if(amountSelected === 0){
        alert("Please select an amount of the item");
        return;
    }

    const product = {
        img: sneakers.img,
        productInfo: sneakers.productInfo,
        price: sneakers.price,
        quantity: amountSelected,
        id: itemsSelected.length 
    };
    
    itemsSelected.push(product);
    renderCartItems();
}

function renderCartItems(){
    items.innerHTML = ''; 
    accountStuff.innerHTML = '';// Clear the items container
    itemsSelected.forEach((item, index) => {
        items.innerHTML += `
            <div class="cart-item" data-id="${index}">
                <div class="item-pic">
                    <img class="images image1" src="${item.img}">
                </div>
                <div class="item-info">
                    <div>
                        <h2 id="item-name">${item.productInfo}</h2>
                        <h2 id="item-price">${item.price} x ${item.quantity} <span>${parseFloat(item.price.replace('$', '')) * item.quantity}</span></h2>
                    </div>
                    <button id="remove" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
            
        `;
    })
   
    itemsSelected.forEach((item, index) => {

        accountStuff.innerHTML += `
            
            <div class="cart-item account-item" data-id="${index}">
                <div class="item-pic account-pic">
                    <img class="images image1" src="${item.img}">
                </div>
                <div class="item-info account-info">
                    <div>
                        <h2 id="item-name account-name">${item.productInfo}</h2>
                        <h2 id="item-price account-price">${item.price} x ${item.quantity} <span>${parseFloat(item.price.replace('$', '')) * item.quantity}</span></h2>
                    </div>
                    <button id="remove" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
            
        `;
    })
    if(index>0){
        items[index].style = "absolute";
        items[index-1].style = "relative"
        items.style.top = "0"
    };
    if(itemsSelected.length <= 2){
        checkout.style.position = "absolute"
    }
    console.log(itemsSelected.length );
}

function removeFromCart(index){
    itemsSelected.splice(index, 1); // Remove item at the given index
    renderCartItems(); // Re-render the cart items
}

// The profile menu

function openProfileBar(){
    if(profileBar.style.width == "6%"){
        profileBar.style.width = "30%";
        profileBar.style.zIndex = "1";
        cards.forEach(card => card.style.visibility = "visible");
    }else{
        profileBar.style.width = "6%";
        profileBar.style.zIndex = "-1"
        cards.forEach(card => card.style.visibility = "hidden");
    }

 
}

// changing the Image viewed
let images = document.querySelectorAll(".images");
for(let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", () => {
            mainImg.src = images[i].src;
    })
}

//Previewing the image
let mainItems = document.querySelector(".main-Items");
let dialog = document.querySelector(".previewMainImg");
let picture = document.querySelector(".previewImage")

function previewImg(){
    picture.src = mainImg.src
    dialog.showModal();
}

function closeDialog(){
    dialog.close();
}
function openAccount(){
    account.showModal();
}
function closeAccount() {
    account.close();
}
