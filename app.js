let container = document.querySelector('.container');
const btn = document.querySelector('.btn');
let value = 16;

let size = getComputedStyle(container).width;
size = Number(size.split('p')[0]);
console.log(size);
draw();

btn.addEventListener('click', () => {
    container.innerHTML = '';
    value = +prompt('Choose the number of squares cubic', 16);

    draw();
})

function draw() {
    for (let i = 1; i <= Math.pow(value, 2); i++) {
        const div = document.createElement('div');
        div.className = 'box';

        div.style.width = `${size / value}px`;
        div.style.height = `${size / value}px`;
        container.append(div);

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    }
}

