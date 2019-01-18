import { notificationMenu } from './notificationMenu';
import { filterMenu } from './filterMenu';

const notificationBtn = document.querySelector('.header__notification');
notificationMenu(notificationBtn);

const fitlerAllScreen = document.querySelector('.previous-lesson__filter');
const fitlerXsScreen = document.querySelector('.previous-lesson__filter_xs');
filterMenu(fitlerAllScreen);
filterMenu(fitlerXsScreen);


//sidebar open
const sidebarToggle = document.querySelector('.sidebar__toggle');
const sidebar = document.querySelector('.wrapper-sidebar');
const content = document.querySelector('.wrapper__content');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('wrapper-sidebar_opened');
    content.classList.toggle('wrapper__content_hidden');
});

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


//new
var progressValue = document.querySelector('.progress-bar__value');

var RADIUS = 60;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function progress(value) {
    var progress = value / 100;
    var dashoffset = CIRCUMFERENCE * (1 - progress);
    console.log('progress:', value + '%');
    progressValue.style.strokeDashoffset = dashoffset;
}
progressValue.style.strokeDasharray = CIRCUMFERENCE;
progress(60);