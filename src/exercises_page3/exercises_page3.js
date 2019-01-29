import './exercises_page3.scss';
import notification from '../common/scripts/notification';
import sidebar from '../common/scripts/sidebar';
import filterMenu from "./scripts/filter";

const notificationBtn = document.querySelector('.header__notification');
notification(notificationBtn);

sidebar();

const filter = document.querySelectorAll('.task__dropdown');
for (let i = 0; i < filter.length; i++) {
    filterMenu(filter[i]);
}


