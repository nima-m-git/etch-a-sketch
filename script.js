const container = document.querySelector('.container');
console.log(container);

let penColor = 'purple';
let dimension = 16;
makeGrid();

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

container.addEventListener('mouseover', function(event) {
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

function changePenColor() {
    penColor = prompt('what color do you want the pen?');
}

function changeBackgroundColor() {
    let backgroundColor = prompt('what color do you want the background?');
    const grid = document.querySelectorAll('.grid');
    grid.forEach(pixel => {
        pixel.style.backgroundColor = backgroundColor;
    })
}