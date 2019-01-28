import './admin_panel.scss';
import sidebar from '../common/scripts/sidebar';
import notification from '../common/scripts/notification';
import filterMenu from './scripts/filter';

sidebar();

const notificationBtn = document.querySelector('.header__notification');
notification(notificationBtn);

const filter = document.querySelector('.transaction__dropdown-filter');
const filter_1 = document.querySelector('.new-transaction__select-user');
const filter_2 = document.querySelector('.new-transaction__select-currency');
filterMenu(filter);
filterMenu(filter_1);
filterMenu(filter_2);
