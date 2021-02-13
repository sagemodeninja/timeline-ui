var today;
var timeline;

document.addEventListener("DOMContentLoaded", e => {
    today = new Date("12/31/1998");
    timeline = new Timeline(today);

    console.log(timeline);
});

class Timeline {
    constructor(today) {
        this.today = today;
        this.year = today.getFullYear();
        this.month = today.getMonth();
        this.date = today.getDate();
        this.daysEachMonth = Timeline.getDaysEachMonth(this.year);
        this.day = this.getDayOfWeek();
        this.monthEnd = this.date == this.daysEachMonth[this.month];
        this.yearEnd = this.month == 11 && this.monthEnd;
    }
    
    getDayOfWeek() {
        let a = this.date;
        for(var m = 0; m < this.month; m++) {
            a += this.daysEachMonth[m];
        }
        
        let b = Math.trunc((this.year - 1) / 4);
        let c = this.year + a + b - 2;

        return c % 7;
    }

    static getDaysEachMonth(year) {
        let daysInMonth = [];
        for(var month = 1; month <= 12; month++) {
            daysInMonth.push(Timeline.getDaysInMonth(year, month));
        }

        return daysInMonth;
    }

    static getDaysInMonth(year, month) {
        const _30DaysMonth = [ 4, 6, 9, 11 ];
        let centennial = (year % 100) == 0;
        let leapYear = centennial ? (year % 400) == 0 : (year % 4) == 0;

        if(_30DaysMonth.includes(month)) {
            return 30;
        } else if (month == 2) {
            return leapYear ? 29 : 28;
        } else {
            return 31;
        }
    }

    nextDay() {
        if(this.yearEnd) {
            this.year += 1;
            this.month = 0;
            this.date = 1;
        } else if (this.monthEnd) {
            this.month += 1;
            this.date = 1;
        } else {
            this.date += 1;
        }

        let monthEnd = this.daysEachMonth[this.month];
        this.day = this.getDayOfWeek();
        this.monthEnd = this.date == monthEnd;
        this.yearEnd = this.month == 11 && this.monthEnd;
    }

    previousDay() {
        if(this.month == 0 && this.date == 1) {
            this.year -= 1;
            this.month = 11;
            this.date = 31;
            this.daysEachMonth = Timeline.getDaysEachMonth(this.year);
        } else if (this.date == 1) {
            this.month -= 1;
            this.date = this.daysEachMonth[this.month];
        } else {
            this.date -= 1;
        }

        let monthEnd = this.daysEachMonth[this.month];
        this.day = this.getDayOfWeek();
        this.monthEnd = this.date == monthEnd;
        this.yearEnd = this.month == 11 && this.monthEnd;
    }
}