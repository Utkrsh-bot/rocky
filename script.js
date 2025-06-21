
const container = document.getElementById("container");
const resetBtn = document.getElementById("resetBtn");
let isDrawing = false;

document.body.addEventListener("mousedown", (e) => {
  if (e.button === 0) { 
    isDrawing = true;
  }
});


document.body.addEventListener("mouseup", () => {
  isDrawing = false;
});


function createGrid(size){
    container.innerHTML = "";
    const squareSize = 960/size;

    for(let i = 0; i < size*size; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
            if (isDrawing) {
                square.style.backgroundColor = "black";
            }
        });
        container.appendChild(square);
    }
}

function promptNewGrid(){
    let input = prompt("Enter grid size (max 100):", 16);
    input = parseInt(input);

    if(input && input > 0 && input <= 100){
        createGrid(input);
    } else {
        alert("bhsdk size sahi krle");
    }
}

resetBtn.addEventListener("click", promptNewGrid);

createGrid(16);