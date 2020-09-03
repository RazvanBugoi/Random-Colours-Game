let colourCode = document.getElementById('colour-code');
let boxes = document.getElementById('allBoxes').getElementsByClassName('box');
let message = document.getElementById('message');
let btn = document.getElementById('reset');
let buttons = document.querySelectorAll('button');
let winnerNumber;
let colours = [];

for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].style.background = `rgb(${getColourCode()},${getColourCode()},${getColourCode()})`;
    boxes[i].addEventListener('click', function (event) {
        if (this.style.background == winnerNumber.style.background) {
            message.innerHTML = 'You won. Congratulations!';
            buttons.forEach((el) => el.setAttribute('disabled', ''));
            buttons[6].removeAttribute('disabled');
        } else {
            message.innerHTML = 'You lost. Try again';
            buttons.forEach((el) => el.setAttribute('disabled', ''));
            buttons[6].removeAttribute('disabled');
        }
    })
}

function winnerBox() {
    let winnerNum = Math.round(Math.random() * 5);
    winnerNumber = boxes[winnerNum];
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

