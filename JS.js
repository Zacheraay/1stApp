var count;
var cycle;
var amount = 100;

function slotMachine() {
    document.getElementById("winDiv").style.opacity = 0;
    clearInterval(cycle);
    count = 0;
    amount--;
    document.getElementById("value").innerHTML = "= " + amount;

    document.getElementById("slot1").style.background = "gray";
    document.getElementById("slot2").style.background = "gray";
    document.getElementById("slot3").style.background = "gray";

    cycle = setInterval(cycleNumber, 10);
}

function cycleNumber() {
    var numbers = ["Images/0.png", "Images/1.png",
                   "Images/2.png", "Images/3.png",
                   "Images/4.png", "Images/5.png",
                   "Images/6.png", "Images/7.png",
                   "Images/8.png", "Images/9.png", ];

    rNum1 = Math.floor(Math.random() * 10);
    rNum2 = Math.floor(Math.random() * 10);
    rNum3 = Math.floor(Math.random() * 10);

    if (count == 20) {
        document.getElementById("slot1").style.background = "rgb(167,149,58)";
    }
    if (count < 20) {
        var image1 = document.getElementById("img1");

        image1.removeAttribute("src");
        image1.setAttribute("src", numbers[rNum1]);
    }


    if (count < 35) {
        var image2 = document.getElementById("img2");

        image2.removeAttribute("src");
        image2.setAttribute("src", numbers[rNum2]);
    } else if (count == 35) {
        document.getElementById("slot2").style.background = "rgb(167,149,58)";
    }

    if (count < 50) {
        var image3 = document.getElementById("img3");

        image3.removeAttribute("src");
        image3.setAttribute("src", numbers[rNum3]);
    } else if (count == 50) {
        document.getElementById("slot3").style.background = "rgb(167,149,58)";
    }

    if (count > 50) {
        clearInterval(cycle);
        displayWin();
    }


    count++;
}

button.addEventListener("click", slotMachine);



function displayWin() {
    var win = false;
    var winType = 0;
    var winMessages = ["2 of a Kind! +$5", "3 of a Kind! +$100", "Straight! +$50"];

    document.getElementById("win").innerHTML = "";

    var num1 = document.getElementById("img1").getAttribute("src");
    num1 = parseInt(num1.charAt(7));
    var num2 = document.getElementById("img2").getAttribute("src");
    num2 = parseInt(num2.charAt(7));
    var num3 = document.getElementById("img3").getAttribute("src");
    num3 = parseInt(num3.charAt(7));

    if (num1 == num2 || num2 == num3 || num3 == num1) {
        win = true;
        if (num1 == num2 && num1 == num3) {
            winType = 1;
        }
    }
    if ((num1 + num3) / 2 == num2 && Math.abs(num1 - num3) == 2) {
        win = true;
        winType = 2;
    }

    if (win) {
        document.getElementById("winDiv").style.opacity = 1;
        document.getElementById("winMsg").innerHTML = "You Win!";
        document.getElementById("win").innerHTML = winMessages[winType];

        if (winType == 0) {
            amount += 5;
        } else if (winType == 1) {
            amount += 100;
        } else if (winType == 3) {
            amount += 50;
        }
    }
    document.getElementById("value").innerHTML = "= " + amount;

    if (!win) {
        document.getElementById("winDiv").style.opacity = 1;
        document.getElementById("winMsg").innerHTML = "Better luck next time!";
    }
}
