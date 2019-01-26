export default function filterMenu(targetFilter) {
    const toggle = targetFilter.querySelector('.selected-item');
    const items = targetFilter.querySelector('.items');

    for (let i = 0; i < items.children.length; i++) {
        items.children[i].addEventListener('click', (event) => {
            toggle.textContent = event.target.textContent;
            closeSelectItems();
        });
        items.children[i].addEventListener('touchstart', (event) => {
            toggle.textContent = event.target.textContent;
            closeSelectItems();
        });
    }

    toggle.addEventListener('click', function (event) {
        event.stopPropagation();
        items.classList.toggle('items_hidden');
        event.target.classList.toggle('selected-item_opened');
    });

    document.addEventListener('click', closeSelectItems);
    document.addEventListener('touchstart', closeSelectItems);

    function closeSelectItems() {
        toggle.classList.remove('selected-item_opened');
        items.classList.add('items_hidden');
    }
}