var count;

function slotMachine() {
    count = 0;
    setInterval(cycleNumber, 200);
}

function cycleNumber() {
    var numbers = ["Images/0.png", "Images/1.png",
                   "Images/2.png", "Images/3.png",
                   "Images/4.png", "Images/5.png",
                   "Images/6.png", "Images/7.png",
                   "Images/8.png", "Images/9.png"];

    rNum1 = Math.floor(Math.random() * 10);
    rNum2 = Math.floor(Math.random() * 10);
    rNum3 = Math.floor(Math.random() * 10);

    if(count < 20) {
        var image1 = document.getElementById("img1");

        image1.removeAttribute("src");
        image1.setAttribute("src", numbers[rNum1]);
    }
    if(count < 35) {
        var image2 = document.getElementById("img2");

        image2.removeAttribute("src");
        image2.setAttribute("src", numbers[rNum2]);
    }
    if(count < 50) {
        var image3 = document.getElementById("img3");

        image3.removeAttribute("src");
        image3.setAttribute("src", numbers[rNum3]);
    }


    count++;
}
