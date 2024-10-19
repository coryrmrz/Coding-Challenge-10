//Task 1: Setup Product HTML Structure
//Look at index. html file

//Task 2: Add Event Listeners for Product Selection

const sizeSelector = document.getElementById("size-selector"); //sizeSelector = "size-selector"
const productPrice = document.getElementById("product-price"); //productPrice  = "product-price"

sizeSelector.addEventListener("click", () => { //when size is selected
    const selectedPrice = event.target.value;
    productPrice.textContent = `$${selectedPrice}`; //size selected displays price associated with that size
});