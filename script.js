var today;
var timeline;

document.addEventListener("DOMContentLoaded", e => {
    today = new Date();
    timeline = new Timeline(today.getFullYear(), today.getMonth(), today.getDate());

    let counter = 0;
    do {
        console.log(timeline.year, timeline.month, timeline.date, timeline.dayOfWeek);
        timeline.nextDay();
        counter += 1;
    } while (counter < 480);
});