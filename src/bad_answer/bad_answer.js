import './bad_answer.scss';

const info = document.querySelector('.info-icon');
const rule = document.querySelector('.rule');
info.addEventListener('click', () => {
    info.classList.toggle('animation-icon');
    rule.classList.toggle('rule_hidden');
});