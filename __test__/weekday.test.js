import Weekday from './../src/weekday.js';

describe('Weekday', () => {
  let weekday;
  beforeEach(() => {
    weekday = new Weekday("January","1","2000");
  });

  test('should create a Weekday Object with day, month, and year parameters', () => {
    expect(weekday.info).toEqual(["January", "1", "2000"]);
  });

  test('should assign numerical values for month, day, and year', () => {
    weekday.assignInfo();
    expect(weekday.month).toEqual(1);
    expect(weekday.day).toEqual(1);
    expect(weekday.year).toEqual(2000);
  });

  test('should detect leap year or not', () => {
    weekday.assignInfo();
    expect(weekday.leapYear).toEqual(true);
  });

  test('should assign Month Key', () => {
    weekday.assignInfo();
    expect(weekday.keyMonth).toEqual(0);
  });

  test('should calculate the day of the given date', () => {
    weekday.assignInfo();
    weekday.calculateDay();
    expect(weekday.finalDay).toEqual("Saturday");
  });
});