let text;
let grade;
let enterGrade = prompt('Enter grade in a number format here: ', 'i.e. 100');

switch (true) {
  case enterGrade >= 90:
    text = "Your grade: A.n/Wow. You're actually smart.";
    break;
  case enterGrade >= 80:
    text = 'Your grade: B.n/Good job, I guess.';
    break;
  case enterGrade >= 70:
    text = "Your grade: C.n/Almost didn't make it there.";
    break;
  case enterGrade >= 60:
    text = 'Your grade: D.n/You need to work harder.';
    break;
  case enterGrade < 60:
    text = 'Your grade: F.n/Mmight be hard to come back from this one.';
    break;
  default:
    text = 'Insufficient value. Please use numbers between 1-100.';
}
console.log(text);
