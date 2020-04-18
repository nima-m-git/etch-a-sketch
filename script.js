const container = document.querySelector('.container');
console.log(container);

let penColor = 'purple'; //default values
let dimension = 16;

makeGrid();

let penColorWheel = document.querySelector('#penColor');
penColorWheel.addEventListener('change', changePenColor, false);
    
let backgroundColorWheel = document.querySelector('backgroundColor');
backgroundColor.addEventListener('change', changeBackgroundColor, false);


function makeGrid() {
    for (i=1 ; i <=dimension**2; i++){
        newDiv = document.createElement('div');
        newDiv.setAttribute('class','grid');
        let pixelRatio = 100/dimension + '%';
        newDiv.style.width = pixelRatio;
        newDiv.style.height = pixelRatio;
        container.appendChild(newDiv);
    }
}

container.addEventListener('mouseover', function(event) { //pen coloring squares on mouseover
    event.target.style.backgroundColor = penColor;
})

function reset() {
    child = container.firstElementChild
    while (child) {
        container.removeChild(child);
        child = container.firstElementChild;
    }
    makeGrid();
}

function changeDimension() {
    dimension = prompt('How many pixels per side?');
    reset();
}

function changePenColor(event) {
    penColor = event.target.value;
}

function changeBackgroundColor(event) {
    let backgroundColor = event.target.value;
    const grid = document.querySelectorAll('.grid');
    grid.forEach(pixel => {
        pixel.style.backgroundColor = backgroundColor;
    })
}





