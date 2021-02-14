const DaysEachMonth = [ 31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const DOWLookupTale = [ 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

class Timeline {
    constructor(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;

        this.getMeta();
    }
    
    get daysInMonth() {
        if(this.month == 1)
            return this.leapYear ? 29 : 28;
        else
            return DaysEachMonth[this.month];
    }
    
    // refer: https://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week
    get dayOfWeek() {
        let A = this.year;
        let M = this.month;
        let D = this.date;

        if(M < 2) A = A - 1;
        return (6 + D + Math.ceil(2.6 * DOWLookupTale[M]) + (5 * (A % 4)) + (4 * (A % 100)) + (6 * (A % 100))) % 7;
    }

    getMeta() {
        this.centennial = (this.year % 100) == 0;
        this.leapYear = this.centennial ? (this.year % 400) == 0 : (this.year % 4) == 0;
        this.yearStart = this.month == 0 && this.date == 1;
        this.monthEnd = this.date == this.daysInMonth;
        this.yearEnd = this.month == 11 && this.monthEnd;
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

        this.getMeta();
    }

    previousDay() {
        if(this.yearStart) {
            this.year -= 1;
            this.month = 11;
            this.date = 31;
        } else if (this.date == 1) {
            this.month -= 1;
            this.date = this.daysInMonth;
        } else {
            this.date -= 1;
        }

        this.getMeta();
    }
}