import './student_page.scss';
import sidebar from '../common/scripts/sidebar';
import notification from '../common/scripts/notification';

sidebar();

const notificationBtn = document.querySelector('.header__notification');
notification(notificationBtn);

// import './scripts/speakStarter';

// var progressValue = document.querySelector('.progress__value');

// var RADIUS = 60;
// var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// function progress(value) {
// 	var progress = value / 100;
// 	var dashoffset = CIRCUMFERENCE * (1 - progress);
// 	console.log('progress:', value + '%');
// 	progressValue.style.strokeDashoffset = dashoffset;
// }
// progressValue.style.strokeDasharray = CIRCUMFERENCE;
// progress(60);