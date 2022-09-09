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
    localStorage.setItem(product,quantity);

    // display product in UI
    displayProducts(product,quantity);
}


const displayProducts = (product,quantity) => {
    const displayContainer = document.getElementById('display-container');
    const li = document.createElement('li');
    
    li.innerHTML = `${product} : ${quantity}`;
    displayContainer.appendChild(li);
}