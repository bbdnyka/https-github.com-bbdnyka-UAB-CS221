let text;
let grade;
let enterGrade = prompt('Enter grade in a number format here: ', 'i.e. 50');

switch (true) {
  case enterGrade >= 90:
    text = "Your grade: A. Here's some brocolli.";
    break;
  case enterGrade >= 80:
    text = "Your grade: B. Here's a carrot.";
    break;
  case enterGrade >= 70:
    text = 'Your grade: C. Baked shoe smothered in laces.';
    break;
  case enterGrade >= 60:
    text = 'Your grade: D. Deep fried cockroach.';
    break;
  case enterGrade < 60:
    text = 'Your grade: F. Dirt.';
    break;
  default:
    text = 'Insufficient value. Please use numbers between 1-100.', enterGrade;
}
console.log(text);
