containerDiv = document.querySelector('.container');
console.log(containerDiv);

for (i=1 ; i <=16*16; i++){
    newDiv = document.createElement('div');
    newDiv.setAttribute('class','grid');
    newDiv.textContent = 'test';

    containerDiv.appendChild(newDiv);
}