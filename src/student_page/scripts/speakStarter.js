import { notificationMenu } from './notificationMenu';
import { filterMenu } from './filterMenu';
import { balanceMenu } from './balanceMenu';
import { sidebarMenu } from './sidebarMenu';

sidebarMenu();

const notificationBtn = document.querySelector('.header__notification');
notificationMenu(notificationBtn);

const fitlerAllScreen = document.querySelector('.previous-lesson__filter');
const fitlerXsScreen = document.querySelector('.previous-lesson__filter_xs');
filterMenu(fitlerAllScreen);
filterMenu(fitlerXsScreen);


const balanceDiagram = document.querySelectorAll('.balance__diagram');
for (let i = 0; i < balanceDiagram.length; i++) {
    balanceMenu(balanceDiagram[i]);
}


//next lesson open options
const lessonOption = document.querySelectorAll('.scheduled-lesson__options');
const lessonAction = document.querySelectorAll('.next-lesson__action');

for (let i = 0; i < lessonOption.length; i++) {
    lessonOption[i].addEventListener('click', (event) => {
        event.target.classList.toggle('scheduled-lesson__options_opened');
        lessonAction[i].classList.toggle('next-lesson__action_opened');
    });
}


const sidebarElement = document.querySelector('.wrapper-sidebar');
window.addEventListener("orientationchange", function () {
    if (sidebarElement.classList.contains('wrapper-sidebar_opened'))
        sidebarElement.style.transition = 'none';

});

