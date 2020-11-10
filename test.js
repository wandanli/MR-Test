onSelectSize = (sizeButton) => {
    var sizeButtons = document.getElementsByClassName("size-button");
    for (var i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].classList.remove("selected-size-button")
    }

    var size = sizeButton.innerHTML;
    sizeButton.classList.add("selected-size-button");
    document.getElementById("selected-size").innerHTML = size;

}