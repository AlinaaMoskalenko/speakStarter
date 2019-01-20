export default function notification(notificationBtn) {
    const notification = notificationBtn.querySelector('.notification__container');
    notificationBtn.addEventListener('click', () => {
        notification.classList.toggle('notification__container_opened');
    });
}