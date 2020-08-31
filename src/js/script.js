let colourCode = document.getElementById('colour-code');
let boxes = document.getElementById('allBoxes').getElementsByClassName('box');
let winnerNumber;
let colours = [];

for (let i = 0; i < boxes.length; i += 1) {
    console.log(boxes[i]);
    boxes[i].style.background = `rgb(${getColourCode()},${getColourCode()},${getColourCode()})`;
    boxes[i].addEventListener('click', function (event) {
        if (this.style.background == winnerNumber.style.background) {
            alert('you won!');
        } else {
            alert('Wrong box :( Try again.')
        }
    })
}


function winnerBox() {
    let winnerNum = Math.round(Math.random() * 5);
    winnerNumber = boxes[winnerNum];
    console.log(winnerNum);
}

winnerBox()

colourCode.innerHTML = winnerNumber.style.background;

for (let i = 0; i <= 255; i += 1) {
    colours.push(i);
}

function getColourCode() {
    return Math.floor(Math.random() * 255);
}



