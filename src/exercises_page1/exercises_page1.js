import './exercises_page1.scss';
import notification from '../common/scripts/notification';
import sidebar from '../common/scripts/sidebar';
import categoryMenu from './scripts/category';

const notificationBtn = document.querySelector('.header__notification');
notification(notificationBtn);

sidebar();

const categoriesBlocks = document.querySelectorAll('.main__category-block');
categoryMenu(categoriesBlocks);


