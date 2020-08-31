let colourCode = document.getElementById('colour-code');


let boxes = document.getElementsByClassName('allBoxes');
let winnerBtn;

for (let i = 0; i < boxes[0].childElementCount; i += 1) {
    console.log(boxes[0].children[i]);
    boxes[0].children[i].style.background = `rgb(${getColourCode()},${getColourCode()},${getColourCode()})`;
    boxes[0].children[i].addEventListener('click', function (event) {
        if (this.style.background == winnerBtn.style.background) {
            alert('you won!');
        } else {
            alert('Wrong box :( Try again.')
        }
    })
}


function winnerBox() {
    let winnerNum = Math.round(Math.random() * 6);
    if (winnerNum == 0) { winnerNum = 1 };
    const winnerNumber = document.getElementById(`box${winnerNum}`);
    console.log(winnerNumber);
    winnerBtn = winnerNumber;
}

winnerBox()

colourCode.innerHTML = winnerBtn.style.background;


let colours = [];

for (let i = 0; i <= 255; i += 1) {
    colours.push(i);
}

function getColourCode() {
    return Math.floor(Math.random() * 255);
}



