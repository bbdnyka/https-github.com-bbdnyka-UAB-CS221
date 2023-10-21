let text;
let grade;
let enterGrade = prompt('Enter grade in a number format here: ', '100');

switch (true) {
  case enterGrade >= 90:
    text = "Your grade: A.n/Wow. You're actually smart.";
    break;
  case enterGrade >= 80:
    text = 'Good job, I guess.';
    break;
  case enterGrade >= 70:
    text = "Almost didn't make it there.";
    break;
  case enterGrade >= 60:
    text = 'You need to work harder.';
    break;
  case enterGrade < 60:
    text = 'Mmight be hard to come back from this one.';
    break;
  default:
    text = 'Insufficient value';
}
console.log(text);
