export default function categoryMenu(categories) {
    for (let i = 0; i < categories.length; i++) {
        categories[i].addEventListener('click', () => {
            event.target.parentNode.classList.toggle('main__category-block_opened');
        });
    }
}