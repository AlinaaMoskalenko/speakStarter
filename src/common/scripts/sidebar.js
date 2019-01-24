export default function sidebar() {
    const sidebarToggle = document.querySelector('.sidebar__toggle');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content-container');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar_opened');
        content.classList.toggle('content-container_hidden');
    });


    document.addEventListener('click', closeSidebar);
    document.addEventListener('touchstart', closeSidebar);

    function closeSidebar() {
        if (event.target.classList.contains('wrapper')) {
            sidebar.classList.remove('sidebar_opened');
            content.classList.remove('content-container_hidden');
        }
    }
}
