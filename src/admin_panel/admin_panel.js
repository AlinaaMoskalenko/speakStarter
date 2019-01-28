import './admin_panel.scss';
import sidebar from '../common/scripts/sidebar';
import notification from '../common/scripts/notification';
import filterMenu from './scripts/filter';

sidebar();

const notificationBtn = document.querySelector('.header__notification');
notification(notificationBtn);

const filter = document.querySelector('.transaction__dropdown-filter');
filterMenu(filter);



//filter
// const toggle = document.querySelector('.selected-item');
// const items = document.querySelector('.items');

// for (let i = 0; i < items.children.length; i++) {
//     items.children[i].addEventListener('click', (event) => {
//         toggle.textContent = event.target.textContent;
//         closeSelectItems();
//     });
// }

// toggle.addEventListener('click', function (event) {
//     event.stopPropagation();
//     items.classList.toggle('items_hidden');
//     event.target.classList.toggle('select-arrow-active');
// });

// document.addEventListener('click', closeSelectItems);

// function closeSelectItems() {
//     toggle.classList.remove('select-arrow-active');
//     items.classList.add('items_hidden');
// }