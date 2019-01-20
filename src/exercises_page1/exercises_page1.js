import './exercises_page1.scss';
import notification from '../common/scripts/notification';
// import sidebar from '../common/scripts/sidebar';

// sidebar();



// export default function sidebar() {
const sidebarToggle = document.querySelector('.sidebar__toggle');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content-conteiner');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar_opened');
    content.classList.toggle('content-conteiner_hidden');
});


document.addEventListener('click', closeSidebar);
document.addEventListener('touchstart', closeSidebar);

function closeSidebar() {
    if (event.target.classList.contains('wrapper')) {
        sidebar.classList.remove('sidebar_opened');
        content.classList.remove('content-conteiner_hidden');
    }
}


const notificationBtn = document.querySelector('.header__notification');
notification(notificationBtn);