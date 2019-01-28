export default function balance(balanceChart) {
    var progressValue = balanceChart.querySelector('.st1');

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
}