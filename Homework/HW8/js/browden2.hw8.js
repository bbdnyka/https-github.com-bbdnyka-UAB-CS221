let text;

let enterGrade = prompt('Enter grade in a number format here: ', 'i.e. 50');

switch (true) {
  case enterGrade >= 90:
    text = 'Your grade: A. Your treat: Steamed broccoli.';
    break;
  case enterGrade >= 80:
    text = 'Your grade: B. Your treat: A carrot.';
    break;
  case enterGrade >= 70:
    text = 'Your grade: C. Your treat: Baked shoe smothered in laces.';
    break;
  case enterGrade >= 60:
    text = 'Your grade: D. Your treat: Deep fried cockroach.';
    break;
  case enterGrade < 60:
    text = "Your grade: F. Your treat: Dirt. You don't deserve anything.";
    break;
  default:
    text = 'Insufficient value. Please reload and use numbers between 1-100.';
}
console.log(text);
