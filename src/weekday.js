export default class Weekday {
  constructor(month, day, year) {
    this.info = [month, day, year];
  }

  assignInfo() {
    switch(this.info[0]) {
      case("January"):
        this.month = 1;
        break;
      case("February"):
        this.month = 2;
        break;
      case("March"):
        this.month = 3;
        break;
      case("April"):
        this.month = 4;
        break;
      case("May"):
        this.month = 5;
        break;
      case("June"):
        this.month = 6;
        break;
      case("July"):
        this.month = 7;
        break;
      case("August"):
        this.month = 8;
        break;
      case("September"):
        this.month = 9;
        break;
      case("October"):
        this.month = 10;
        break;
      case("November"):
        this.month = 11;
        break;
      case("December"):
        this.month = 12;
        break;
      default:
        this.month = 0;
    }
    this.day = parseInt(this.info[1]);
    this.year = parseInt(this.info[2]);
  }
  
}


