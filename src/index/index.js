import './index.scss';
import sidebar from '../common/scripts/sidebar';
import notification from '../common/scripts/notification';

sidebar();

const notificationBtn = document.querySelector('.header__notification');
notification(notificationBtn);
