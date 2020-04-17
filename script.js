const container = document.querySelector('.container');
console.log(container);

makeGrid();

function makeGrid(dimension=16) {
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
    event.target.style.backgroundColor = 'purple';
})

function reset() {
    child = container.firstElementChild
    while (child) {
        container.removeChild(child);
        child = container.firstElementChild;
    }

    let newSize = prompt('How many pixels per side?');
    makeGrid(newSize);
}