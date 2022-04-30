// Variable definition of DOM elements the user will interact with
const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const colorPicker = document.querySelector('#colorPicker');
const table = document.querySelector('#pixelCanvas');
const formElement = document.querySelector('#sizePicker');

// get user input data
let height = gridHeight.value;
let width = gridWidth.value;

    // Change cell color -->
function colorInput(e){
    e.target.style.backgroundColor = colorPicker.value;
};

    // Create canvas Grid and apply color -->
function makeGrid(height, width) {
    event.preventDefault();
    table.innerHTML = "" //clear rows and cells
    for (let tableRow = 0; tableRow < height; tableRow++){
        let row = table.insertRow(tableRow);
        for(let rowCol = 0; rowCol < width; rowCol++){
            let cells = row.insertCell(rowCol);
            cells.onclick = colorInput;
        }
    }
};

// Event listener
formElement.addEventListener('submit', function repondToSubmit(){
    // get user input data
    let height = gridHeight.value;
    let width = gridWidth.value;
    makeGrid(height, width);
});