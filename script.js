const container = document.querySelector('.container');

createGrid(16);

function createGrid(size) {
    const cellSize = size;
    const gridSize = cellSize * cellSize;

    for (i = 0; i < gridSize; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');
        newDiv.style.width = 640 / size + "px";
        newDiv.style.height = 640 / size + "px";

        container.appendChild(newDiv);
        newDiv.addEventListener('mouseenter', () => {
            newDiv.style.backgroundColor = 'black';

        });
    }
}
const btn = document.querySelector('.btn-grid')
btn.addEventListener('click', () => {
    let input = prompt("Introduce the square number (maximum 100):");
    let userSize = parseInt(input)

    if (isNaN(userSize) || userSize <= 0 || userSize > 100) {
        alert("The number is invalid");
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        createGrid(userSize);
    }
    console.log(userSize);
});

console.log(container);

