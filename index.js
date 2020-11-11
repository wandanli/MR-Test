

removeSelectedClass = () => {
    var sizeButtons = document.getElementsByClassName("size-button");
    for (var i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].classList.remove("selected-size-button")
    }
    document.getElementById("selected-size").innerHTML == ""
}

onSelectSize = (sizeButton) => {
    removeSelectedClass();

    var size = sizeButton.innerHTML;

    if (document.getElementById("selected-size").innerHTML == size) {
        document.getElementById("selected-size").innerHTML = "";
        removeSelectedClass();
    }
    else {
        sizeButton.classList.add("selected-size-button");
        document.getElementById("selected-size").innerHTML = size;
        document.getElementById("error-message").innerHTML = "";
    }

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
        addMiniCartItemsContent();
    }
}

addMiniCartItemsContent = () => {
    var miniCartItemDisplay = ""
    for (var i = 0; i < mCurrentCartItemOrder.length; i++) {
        var size = mCurrentCartItemOrder[i];
        var item = mCurrentCartItems.get(size);
        miniCartItemDisplay += "<div class=\"cart-item-card\">" + "<img src = \"./image/classic-tee.jpg\" alt = \"classic-tee\" width=\"600\" height=\"900\">" + "<div class=\"cart-item-card-content\"><p>" + item.name + "</p><p>" + item.quantity + " X <b>" + item.price + "</b></p><p>Size: " + item.size + "</p></div></div >";

    }
    document.getElementById("mini-cart").innerHTML = miniCartItemDisplay;

}

onDisplayMiniCart = () => {
    var is_visibility = document.getElementById("mini-cart").style.visibility
    if (is_visibility == "hidden") {
        document.getElementById("mini-cart").style.visibility = "visible";
    }
    else {
        document.getElementById("mini-cart").style.visibility = "hidden";
    }

}
