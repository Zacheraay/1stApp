var count;

function slotMachine() {

    setInterval(cycleNumber, 200);

    document.getElementById("slot1").style.background = "gray";
    document.getElementById("slot2").style.background = "gray";
    document.getElementById("slot3").style.background = "gray";

    displayWin();

    count = 0;
}

function cycleNumber() {
    var numbers = ["Images/0.png"];

    rNum1 = Math.floor(Math.random());
    rNum2 = Math.floor(Math.random());
    rNum3 = Math.floor(Math.random());

    if (count == 20) {
        document.getElementById("slot1").style.background = "rgb(197,179,88)";
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
        document.getElementById("slot2").style.background = "rgb(197,179,88)";
    }

    if (count < 50) {
        var image3 = document.getElementById("img3");

        image3.removeAttribute("src");
        image3.setAttribute("src", numbers[rNum3]);
    } else if (count == 50) {
        document.getElementById("slot3").style.background = "rgb(197,179,88)";
    }


    count++;
}

button.addEventListener("click", slotMachine)



function displayWin() {
    var slot1 = document.getElementById("slot1").getAttribute("src");
    var slot2 = document.getElementById("slot2").getAttribute("src");
    var slot3 = document.getElementById("slot3").getAttribute("src");

    if(slot1 === slot2 && slot1 === slot3) {
        document.getElementById("win").style.opacity = "1";
    }

}
