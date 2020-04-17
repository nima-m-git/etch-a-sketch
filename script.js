const container = document.querySelector('.container');
console.log(container);

for (i=1 ; i <=16*16; i++){
    newDiv = document.createElement('div');
    newDiv.setAttribute('class','grid');
    container.appendChild(newDiv);
}

container.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'purple';
})

