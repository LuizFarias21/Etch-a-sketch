let container = document.querySelector('.container');
const btn = document.querySelector('.btn');
let teste = 16;

const size = container.style.width;
console.log(size);

for (let i = 1; i <= Math.pow(teste, 2); i++) {
    const div = document.createElement('div');
    div.className = 'box';
    container.append(div);

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    })
}

btn.addEventListener('click', () => {
    //div.style.backgroundColor = 'white';
    container.innerHTML = '';
    teste = +prompt('Choose the number of squares cubic', 16);

    for (let i = 1; i <= Math.pow(teste, 2); i++) {
        const div = document.createElement('div');
        div.className = 'box';

        div.style.width = `${320/teste}px`;
        div.style.height = `${320/teste}px`;
        container.append(div);

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    }
})

