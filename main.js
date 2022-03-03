const res = document.querySelector(".display");
const btns = [...document.querySelectorAll("button")];

const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'x': (a, b) => a * b,
    '÷': (a, b) => Math.floor(a / b)
};

function action(e) {
    let pressed = document.getElementById(e.target.id);

    if (pressed.id === 'btnSum') res.innerHTML += '+';
    if (pressed.id === 'btnSub') res.innerHTML += '-';
    if (pressed.id === 'btnMul') res.innerHTML += 'x';
    if (pressed.id === 'btnDiv') res.innerHTML += '÷';
    if (pressed.id === 'btn0') res.innerHTML += '0';
    if (pressed.id === 'btn1') res.innerHTML += '1';
    if (pressed.id === 'btnClr') res.innerHTML += '';
    if (pressed.id === 'btnEql') {
        const [op1, operator, op2] = res.innerText.split(/\b/);

        const [n1, n2] = [parseInt(op1, 2), parseInt(op2, 2)];

        res.innerText = Number(ops[operator](n1, n2)).toString(2)
    }
}

btns.forEach(btn => btn.addEventListener('click', action));

function handleFirstTab(e) {
    if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab)

const light = document.querySelector('.light');
const blink = setInterval(() => light.classList.toggle('dim'))
setTimeout(() => clearInterval(blink), 2000);