import './complex_sentence.scss';

const answerButtons = document.querySelector('.btn-block');
const buttons = answerButtons.querySelectorAll('.btn-answer');

const inputs = document.querySelectorAll('.input');
let counter = 0;

const nextExercise = document.querySelector('.next-btn');

if (answerButtons.classList.contains('two')) {
    for (let i = 0; i < 2; i++) {
        buttons[i].classList.remove('hidden');
    }
} else {
    for (let i = 2; i < buttons.length; i++) {
        buttons[i].classList.remove('hidden');
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (counter === 0) {
            inputs[counter].value = buttons[i].textContent;
            inputs[counter].style.width = (buttons[i].offsetWidth - 20) + 'px'; //padding 20px (padding: 0 20px)
            inputs[counter].style.minWidth = '70px';

            inputs[counter].classList.remove('input_active');
            inputs[counter].autofocus = false;

            inputs[counter + 1].classList.add('input_active');
            inputs[counter + 1].focus();

            if (answerButtons.classList.contains('two')) {
                for (let i = 0; i < 2; i++) {
                    buttons[i].classList.add('hidden');
                }
                for (let i = 2; i < buttons.length; i++) {
                    buttons[i].classList.remove('hidden');
                }
            } else {
                for (let i = 2; i < buttons.length; i++) {
                    buttons[i].classList.add('hidden');
                }
                for (let i = 0; i < 2; i++) {
                    buttons[i].classList.remove('hidden');
                }
            }
        } else {
            inputs[counter].value = buttons[i].textContent;
            inputs[counter].style.width = (buttons[i].offsetWidth - 20) + 'px'; //padding 20px (padding: 0 20px)
            inputs[counter].style.minWidth = '70px';

            inputs[counter].classList.remove('input_active');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.add('hidden');
                nextExercise.classList.add('next-btn_show');
                inputs[0].style.borderBottomColor = '#8dcddd';
                inputs[1].style.borderBottomColor = '#8dcddd';
            }
        }

        counter++;
    });
}
