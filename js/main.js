const container = document.querySelector('.container');
const newButton = document.querySelector('.new-button');
let gridSize = 16;

function createGrid() {
    let gridRows = gridSize;
    let gridColumns = gridSize;

    for (let i = 0; i < gridRows; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);

        for (let j = 0; j < gridColumns; j++) {
            const column = document.createElement('div');
            column.classList.add('grid-column');
            row.appendChild(column);
        }
    }
}

function colorGrid(e) {
    if (e.target.classList[0] === 'grid-column') {
        e.target.classList.add('coral');
    }
}

function clearGrid() {
    const pixels = document.querySelectorAll('.grid-column');

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].classList.remove('coral');
    }
}

function newGrid() {
    gridSize = 0;
    clearGrid();

    while ((gridSize < 1) || (gridSize > 64)) {
        gridSize = prompt('Grid size? (1-64)');
        gridSize = parseInt(gridSize, 10);
    }

    container.textContent = '';
    createGrid();
}

createGrid();
container.addEventListener('mouseover', colorGrid);
newButton.addEventListener('click', newGrid);
