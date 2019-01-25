import './index.scss';
import sidebar from '../common/scripts/sidebar';
import notification from '../common/scripts/notification';
import balanceTabsToggle from './scripts/balance';
import nxtLesson from './scripts/nxt-lesson';
import slider from './scripts/slider';

sidebar();

const notificationBtn = document.querySelector('.header__notification');
notification(notificationBtn);

const balanceTabs = document.querySelectorAll('.balance__tab-block');
const balanceCharts = document.querySelectorAll('.balance__chart');
for (let i = 0; i < balanceTabs.length; i++) {
    balanceTabsToggle(balanceTabs[i], balanceCharts[i]);
}

const nxtLessonItems = document.querySelectorAll('.nxt-lesson__item');
for (let i = 0; i < nxtLessonItems.length; i++) {
    nxtLesson(nxtLessonItems[i]);
}

const sliderToggles = document.querySelector('.nxt-lesson__slider-block');
slider(sliderToggles);
