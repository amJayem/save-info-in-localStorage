const getElementById = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}

const addProducts = () =>{
    const product = getElementById('product-name-field');
    const quantity = getElementById('product-quantity-field');

    console.log(product,quantity);
    //set to local storage
    storeItemToLocalStorage(product,quantity);

    // display product in UI
    displayProducts(product,quantity);
}

const getSavedInfoFromLocalStorage = () =>{
    let cart = {};
    let savedCart = localStorage.getItem('cart');

    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const storeItemToLocalStorage = (product,quantity) =>{
    let cart = getSavedInfoFromLocalStorage();

    // add product to the object as property 
    cart[product] = quantity;
    const cartStringifying = JSON.stringify(cart);

    // save to local storage
    localStorage.setItem('cart', cartStringifying);
}

const displayProducts = (product,quantity) => {
    const displayContainer = document.getElementById('display-container');
    const li = document.createElement('li');
    
    li.innerHTML = `${product} : ${quantity}`;
    displayContainer.appendChild(li);
}

const displaySavedProducts = () =>{
    const cart = getSavedInfoFromLocalStorage();
    console.log(cart);

    for(const product in cart){
        const quantity = cart[product];
        console.log(product,quantity);
        displayProducts(product,quantity);
    }
}

// default as display saved items
displaySavedProducts();