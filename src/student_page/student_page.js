import './student_page.scss';
import sidebar from '../common/scripts/sidebar';
import notification from '../common/scripts/notification';
import filterMenu from './scripts/filter';
import nxtLesson from './scripts/nxt-lesson';
import balance from './scripts/balance';

sidebar();

const notificationBtn = document.querySelector('.header__notification');
notification(notificationBtn);

const filter = document.querySelector('.prev-lesson__dropdown-filter');
filterMenu(filter);

const nxtLessonItems = document.querySelectorAll('.nxt-lesson__item');
for (let i = 0; i < nxtLessonItems.length; i++) {
    nxtLesson(nxtLessonItems[i]);
}

const balanceChart = document.querySelectorAll('.balance__chart');
for (let i = 0; i < balanceChart.length; i++) {
    balance(balanceChart[i]);
}
