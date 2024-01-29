function grading(score) {
  let mark = '';
  switch (true) {
    case score <= 100 && score >= 80:
      mark = 'A+';
      break;
    case score < 80 && score >= 70:
      mark = 'A';
      break;
    case score < 70 && score >= 60:
      mark = '-A';
      break;
    case score < 60 && score >= 50:
      mark = 'B';
      break;
    case score < 50 && score >= 40:
      mark = 'C';
      break;
    case score < 40 && score >= 33:
      mark = 'D';
      break;
    case score < 33 && score >= 0:
      mark = 'F';
      break;
    case score < 0 && score > 100:
      mark = 'Please Enter Your Valid Result.';
      break;

    default:
      return 'Please Enter Your Valid Result.';
  }
  return `You Achieved GPA ${mark}`;
}
const firstPerson = grading(60);

console.log(firstPerson);
