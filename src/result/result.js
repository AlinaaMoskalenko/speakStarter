import './result.scss';

const starsBlock = document.querySelector('.stars-block');
const timer = setInterval(() => {
    clearInterval(timer);
    // for (let i = 1; i < starsBlock.childNodes.length; i + 2) {
    //     if (i === starsBlock.childNodes.length - 1) {
    //         clearInterval(timer);
    //     }
    //     // console.log(i);
    //     // console.log(starsBlock.childNodes[i]);
    // }
}, 500);
