let value = 2
let gradientRGB = 255
let gradientRounded = 255 

createNewSquares(value);

function getSquarePerLine() {
    let value = document.getElementById("number").value;
    if (value > 1 && value < 101) {
        const boxes = document.querySelectorAll('.square');
        boxes.forEach(box => {
        box.remove();
        });
        createNewSquares(value);
    }
    else {
        const boxes = document.querySelectorAll('.square');
        boxes.forEach(box => {
        box.remove();
        });
        createNewSquares(2);
    }
}

function getSquareSize(n) {
    return (500/n)-3;
}

function getSquareAmount(n) {
    return (n*n);
}

const buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click", getSquarePerLine);

const buttonBlack = document.getElementById("black");
buttonBlack.addEventListener("click", black);

const buttonRandom = document.getElementById("random");
buttonRandom.addEventListener("click", random);

const buttonGradient = document.getElementById("gradient");
buttonGradient.addEventListener("click", gradient);

function black() {
    setColor("black");
}

function random() {
    setColor("random");
}

function gradient() {
    setColor("gradient");
}

function createNewSquares(number) { 
    for(x=0; x<getSquareAmount(number);x++) {
        var board = document.createElement('div');
        board.className = "square";
        board.style.flexBasis = getSquareSize(number)+"px";

        document.getElementById('container').appendChild(board);
        setColor("black");
}
}

function gradientColor () {
    if (gradientRGB != 0) {
        gradientRGB -= 25.5;
        gradientRounded = Math.round(gradientRGB);
        return `rgb(${gradientRounded}, ${gradientRounded}, ${gradientRounded})`;
    }    
    else {
        return "rgb(0 ,0 ,0)";
    }
} 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function randomColor() {
    return getRandomInt(255);
}


function setColor(color) {
    const divs = document.querySelectorAll(".square");
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener("mouseover", function (e) {
        if (color == "gradient") {
          e.target.style.backgroundColor = gradientColor();
        } else if (color == "random") {
          e.target.style.backgroundColor = `rgb(${randomColor()} ,${randomColor()} ,${randomColor()})`;
        } else {
          e.target.style.backgroundColor = "black";
        }
      });
    }
  }

