//Task 1: Setup Product HTML Structure
//Look at index. html file

//Task 2: Add Event Listeners for Product Selection

const sizeSelector = document.getElementById("size-selector"); // define sizeSelector
const productPrice = document.getElementById("product-price"); //define productPrice

sizeSelector.addEventListener("click", () => { //when size is selected
    const selectedPrice = event.target.value;
    productPrice.textContent = `$${selectedPrice}`; //size selected displays price associated with that size
});

//Task 3: Handle Stock Availability

let stock = 100; //stock number example

const purchaseProductButton = document.getElementById("purchase-product"); //define purchase product button
const availabilityStatus = document.getElementById("availability-status"); //define availabilityStatus

function updateInventory() {
    if (stock > 0) {
        purchaseProductButton.disabled = false; //if stock is more than 0, then button is available to use
        availabilityStatus.textContent = `Availability: ${stock}`; //displays how many are available
    } else {
        purchaseProductButton.disabled = true; //if not, then button is disabled
        availabilityStatus.textContent = `Out of Stock`; //displays out of stock message
    }
}
purchaseProductButton.addEventListener("click", () => {
    stock--;
    updateInventory(); //updates and disables purchase product button depending on stock
});

updateInventory(); //Initializes page