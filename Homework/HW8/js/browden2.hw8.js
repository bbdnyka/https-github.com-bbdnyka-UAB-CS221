let text; //variable for holding error message
let grade = 'Your grade: '; //variable for holding grade value
let letterGrade = 'Your letter grade: '; //variable for holding grade letter
let treat = 'Your treat: '; //variable for holding treat

//prompt
let enterGrade = prompt('Enter grade in a number format here: ', 'i.e. 50');

switch (
  true //switch case for calculating/translating grades and issuing treats
) {
  case enterGrade >= 90 && enterGrade <= 100: //grade: 90-100
    grade += enterGrade.toString();
    letterGrade += 'A.';
    treat += 'broccoli.';
    console.log(grade + '.' + '\n' + letterGrade + '\n' + treat);
    break;
  case enterGrade >= 80 && enterGrade < 90: //grade: 80-89
    grade += enterGrade.toString();
    letterGrade += 'B.';
    treat += 'milk';
    console.log(grade + '.' + '\n' + letterGrade + '\n' + treat);
    break;
  case enterGrade >= 70 && enterGrade < 80: //grade: 70-79
    grade += enterGrade.toString();
    letterGrade += 'C.';
    treat += 'something edible.';
    console.log(grade + '.' + '\n' + letterGrade + '\n' + treat);
    break;
  case enterGrade >= 60 && enterGrade < 70: //grade: 60-69
    grade += enterGrade.toString();
    letterGrade += 'D.';
    treat += 'You deserve nothing. ';
    console.log(grade + '.' + '\n' + letterGrade + '\n' + treat);
    break;
  case enterGrade < 60 && enterGrade >= 0: //grade: 0-59
    grade += enterGrade.toString();
    letterGrade += 'F.';
    treat += 'Air.';
    console.log(grade + '.' + '\n' + letterGrade + '\n' + treat);
    break;
  default:
    //for input errors. Number not between 1-100, letters entered, more than one number,  etc.
    text = 'Insufficient value. Please use numbers between 1-100.';
    console.log(text);
}
