let options = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F'];
const button = document.querySelector('.buttonInner');
const background = document.querySelector('body');
const hexCode = document.querySelector('.hexCode');

button.addEventListener('click', createNewRandomBackground);

function createNewRandomBackground() {
    
    let hex = '#';

    for(let i = 0 ; i < 6; i++){
        let random = Math.floor(Math.random()*options.length);
        hex += options[random];
    }

  background.style.backgroundColor = hex;
  hexCode.innerHTML = hex;
}

