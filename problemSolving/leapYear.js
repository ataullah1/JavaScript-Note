// 99% Acuret Simple Leap Year

function leapYear(year) {
  if (year % 4 === 0) {
    return `${year}- Is Leap Year.`;
  } else {
    return `${year}- Is Not Leap Year.`;
  }
}

console.log(leapYear(2053));

console.log('-----------------');

/**
 * 100% Acuret Leap Year Defiend
 *
 * 01.if>>> Those year that is not divisible by 100 and if year is divisible by 4: then it will be a leap year.
 *
 * 02. else if>>> the year id divisible by 100 and 400, then is a leap year.
 *
 * 03. else >>>>>>> it is not a leap year.
 */

function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return `${year}- Is Leap Year.`;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return `${year}- Is Leap Year.`;
  } else {
    return `${year}- Is Not Leap Year.`;
  }
}
console.log(isLeapYear(2052));

console.log('-----------------');
