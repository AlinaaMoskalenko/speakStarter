export default function sidebar() {
    const sidebarToggle = document.querySelector('.sidebar__toggle');
    const sidebar = document.querySelector('.wrapper-sidebar');
    const content = document.querySelector('.wrapper__content');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('wrapper-sidebar_opened');
        content.classList.toggle('wrapper__content_hidden');
    });


    document.addEventListener('click', closeSidebar);
    document.addEventListener('touchstart', closeSidebar);

    function closeSidebar() {
        if (event.target.classList.contains('wrapper-sidebar_opened')) {
            sidebar.classList.remove('wrapper-sidebar_opened');
            content.classList.remove('wrapper__content_hidden');
        }
    }
}
