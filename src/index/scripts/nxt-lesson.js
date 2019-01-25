export default function nxtLesson(nxtLessonItem) {
    const toggle = nxtLessonItem.querySelector('.toggle');
    toggle.addEventListener('click', () => {
        nxtLessonItem.classList.toggle('nxt-lesson__item_opened');
    });
}