export default class Weekday {
  constructor(month, day, year) {
    this.info = [month, day, year];
  }

  assignInfo() {
    if(parseInt(this.info[1])) {
      this.day = parseInt(this.info[1]);
    }
    if(parseInt(this.info[2])) {
      this.year = parseInt(this.info[2]);
    }

    this.leapYear = this.year%4 === 0 ? true:false;

    switch(this.info[0]) {
      case("January"):
        this.month = 1;
        if(this.leapYear) {
          this.keyMonth = 0;
        } else {
          this.keyMonth = 1;
        }
        break;
      case("February"):
        this.month = 2;
        if(this.leapYear) {
          this.keyMonth = 3;
        } else {
          this.keyMonth = 4;
        }
        break;
      case("March"):
        this.month = 3;
        this.keyMonth = 4;
        break;
      case("April"):
        this.month = 4;
        this.keyMonth = 0;
        break;
      case("May"):
        this.month = 5;
        this.keyMonth = 2;
        break;
      case("June"):
        this.month = 6;
        this.keyMonth = 5;
        break;
      case("July"):
        this.month = 7;
        this.keyMonth = 0;
        break;
      case("August"):
        this.month = 8;
        this.keyMonth = 3;
        break;
      case("September"):
        this.month = 9;
        this.keyMonth = 6;
        break;
      case("October"):
        this.month = 10;
        this.keyMonth = 1;
        break;
      case("November"):
        this.month = 11;
        this.keyMonth = 4;
        break;
      case("December"):
        this.month = 12;
        this.keyMonth = 6;
        break;
      default:
        this.month = 0;
    }
  }

  isValid() {
    let monthType = 0;
    if(this.year < 1753 || this.year > 2099 || this.day < 1) {
      return false;
    }
    if(this.month%2 === 1 && this.month < 10) {
      monthType = 31;
    } else if(this.month === 2) {
      if(this.leapYear) {
        monthType = 29;
      } else {
        monthType = 28;
      }
    } else if(this.month%2 === 0 && this.month < 10) {
      monthType = 30;
    } else if(this.month%2 === 1 && this.month > 10) {
      monthType = 30;
    } else if(this.month%2 === 0 && this.month > 10) {
      monthType = 31;
    }
    console.log(monthType);
    return this.day <= monthType;
  }

  calculateDay() {
    let refactor = 0;
    if(this.year <= 1800) {
      refactor = 4;
    } else if(this.year <= 1900) {
      refactor = 2;
    } else if(this.year <= 2099) {
      refactor = -1;
    }
    const dayIndex = (this.year%100 + Math.floor((this.year%100)/4) + this.day + this.keyMonth + refactor)%7;
    switch(dayIndex) {
      case(0):
        this.finalDay = "Saturday";
        break;
      case(1):
        this.finalDay = "Sunday";
        break;
      case(2):
        this.finalDay = "Monday";
        break;
      case(3):
        this.finalDay = "Tuesday";
        break;
      case(4):
        this.finalDay = "Wednesday";
        break;
      case(5):
        this.finalDay = "Thursday";
        break;
      case(6):
        this.finalDay = "Friday";
        break;
      default:
        this.finalDay = "";
    }

  }
  
}


