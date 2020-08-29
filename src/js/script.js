let colourCode = document.getElementById('colour-code');
colourCode.value = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');

box1.style.background = `${colourCode.value}`;
box2.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
box3.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
box4.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
box5.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
box6.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;

let reset = document.getElementById('reset');
reset.onclick = changeColours;

function changeColours() {
    colourCode.value = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    box1.style.background = `${colourCode.value}`;
    box2.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    box3.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    box4.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    box5.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    box6.style.background = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
}



let colours = [];

for (let i = 0; i <= 255; i += 1) {
    colours.push(i);
}

function getRandomNumber() {
    return Math.floor(Math.random() * Math.floor(255));
}

box1.onclick = testTheBox;
box2.onclick = testTheBox;
box3.onclick = testTheBox;
box4.onclick = testTheBox;
box5.onclick = testTheBox;
box6.onclick = testTheBox;

// function testTheBox(this) {
//     if this.syle.background == `${colourCode.value}` {
//         alert('This is the right colour code, you won!')
//     } else {
//         alert('Ups, this is not the same colour, try again.')
//         changeColours();
//     }
// }


