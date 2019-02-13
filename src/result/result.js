import './result.scss';

const starsBlock = document.querySelector('.stars-block');
let counter = 1;
const timer = setInterval(() => {
    if (counter === starsBlock.childNodes.length - 2) {
        clearInterval(timer);
        starsBlock.nextElementSibling.classList.add('show');
        starsBlock.parentNode.nextElementSibling.classList.add('result-info_show');
    }
    starsBlock.childNodes[counter].classList.add('star-animation');
    counter += 2;
}, 500);



