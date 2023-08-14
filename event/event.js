const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
const makeGray = document.getElementById('make-gray');

makeGray.onclick = gray;
function gray() {
    document.body.style.backgroundColor = 'gray';
}

