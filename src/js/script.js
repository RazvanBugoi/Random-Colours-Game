let colourCode = document.getElementById('colour-code');
let boxes = document.getElementById('allBoxes').getElementsByClassName('box');
let message = document.getElementById('message');
let btn = document.getElementById('reset');
let buttons = document.querySelectorAll('button');
let winnerNumber;
let colours = [];

for (let i = 0; i < boxes.length; i += 1) {
    console.log(boxes[i]);
    boxes[i].style.background = `rgb(${getColourCode()},${getColourCode()},${getColourCode()})`;
    boxes[i].addEventListener('click', function (event) {
        if (this.style.background == winnerNumber.style.background) {
            message.innerHTML = 'you won';
            buttons.forEach((el) => el.setAttribute('disabled', ''));
            buttons[6].removeAttribute('disabled');
        } else {
            message.innerHTML = 'you lost';
            buttons.forEach((el) => el.setAttribute('disabled', ''));
            buttons[6].removeAttribute('disabled');
        }
    })
}

function refresh() {
    let timeout = window.setTimeout(location.reload, 2000);
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

reset.addEventListener('click', function (event) {
    location.reload();
});

