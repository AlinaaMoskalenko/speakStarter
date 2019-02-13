import './simple_sentence.scss';

const answerButtons = document.querySelector('.btn-block');
const buttons = answerButtons.querySelectorAll('.btn-answer');

const input = document.querySelector('.input');

const nextExercise = document.querySelector('.next-btn');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        input.value = buttons[i].textContent;
        input.style.width = (buttons[i].offsetWidth - 20) + 'px'; //padding 20px (padding: 0 20px)
        input.style.minWidth = '70px';
        answerButtons.classList.add('btn-block_hidden');
        nextExercise.classList.add('next-btn_show');
    });
}
