onSelectSize = (sizeButton) => {
    var sizeButtons = document.getElementsByClassName("size-button");
    for (var i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].classList.remove("selected-size-button")
    }
    var size = sizeButton.innerHTML;
    sizeButton.classList.add("selected-size-button");
    document.getElementById("selected-size").innerHTML = size;
    document.getElementById("error-message").innerHTML = "";
}

class CartItem {
    constructor(name, price, size, quantity) {
        this.name = name;
        this.price = price;
        this.size = size;
        this.quantity = quantity;
    }
}

var mCurrentCartItems = new Map();
var mCurrentCartItemOrder = [];

addToCart = () => {
    var name = document.getElementById("item-name").innerHTML;
    var price = document.getElementById("item-price").innerHTML;
    var size = document.getElementById("selected-size").innerHTML;
    var item = mCurrentCartItems.get(size);
    if (item == null) {
        item = new CartItem(name, price, size, 1)
        mCurrentCartItems.set(size, item);
        mCurrentCartItemOrder.push(size);
    }
    else {
        item.quantity = item.quantity + 1;
    }
}

calculateTotal = () => {
    var total = 0;
    for (i = 0; i < mCurrentCartItemOrder.length; i++) {
        var size = mCurrentCartItemOrder[i];
        var item = mCurrentCartItems.get(size);
        total += item.quantity;
    }
    document.getElementById("cart-quantity").innerHTML = total;
}

displayErrorMessage = () => {
    var size = document.getElementById("selected-size").innerHTML;
    if (size == "") {
        document.getElementById("error-message").innerHTML = "Please select a size."
    }
    else {
        return false;
    }
}

onAddToCart = () => {
    if (displayErrorMessage() == false) {
        addToCart();
        calculateTotal();
    }
}