function slotMachine() {
    var base = new Date();
    base = base.getTime();
}

function cycleNumber(imgNumber) {
    var numbers = ["Images/0.png", "Images/1.png",
                   "Images/2.png", "Images/3.png",
                   "Images/4.png", "Images/5.png",
                   "Images/6.png", "Images/7.png",
                   "Images/8.png", "Images/9.png"];

    rNum = Math.floor(Math.random() * 10);

    var image = document.getElementById("img"+imgNumber);

    image.removeAttribute("src");
    image.setAttribute("src", numbers[rNum]);
}
