import './empty_sentence.scss';

const input = document.querySelector('.input');
const nextExercise = document.querySelector('.next-btn');


input.addEventListener('keyup', () => {
    nextExercise.classList.add('next-btn_show');
    isValid();
});

function isValid() {
    if (!input.value) {
        nextExercise.classList.remove('next-btn_show');
    }
}
