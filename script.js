const image = document.querySelector('#myImage');
const text = document.querySelector('h2');

const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');

buttonOne.addEventListener('click', getJohn);
buttonTwo.addEventListener('click', getEidan);

function getJohn() {
    image.setAttribute('src', 'https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Fjohn.jpg?v=1629311550485');
    text.innerHTML = "Will they get married?"
    buttonOne.innerHTML = 'Yes, but not right away';
    buttonTwo.innerHTML = 'No, never';

    buttonOne.addEventListener('click', wedding);
    buttonTwo.addEventListener('click', neverMarried);

}

function wedding() {
    image.setAttribute('src', 'https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Falter-new.jpg?v=1629311619781');
    text.innerHTML = "he will never show up at the wedding";
    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function neverMarried() {
    image.setAttribute('src', 'https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Fwedding.jpg?v=1629311585150');
    text.innerHTML = "they will be forever happy";
    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function getEidan() {
    image.setAttribute('src', 'https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Fwedding-aidan.jpg?v=1629311640088');
    text.innerHTML = "Will they be happy?"
    buttonOne.innerHTML = 'Yes';
    buttonTwo.innerHTML = 'No';

    buttonOne.addEventListener('click', yes);
    buttonTwo.addEventListener('click', no);
}

function yes() {
    image.setAttribute('src', 'https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Faidan-new-baby.png?v=1629311662748');
    text.innerHTML = "they will have many kids";
    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function no() {
    image.setAttribute('src', 'https://cdn.glitch.com/e3a21960-b94a-48a5-9834-e646c426a488%2Floved-you.jpg?v=1629311687619');
    text.innerHTML = "she will cheat on him and they will break up";
    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}