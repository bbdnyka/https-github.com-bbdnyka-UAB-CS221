let text;
let yourGrade=prompt("Enter the grade here: ","A");
switch(yourGrade){
  case "A":
    text="Wow. You're actually smart.";
    break;
  case "B":
    text="Good job, I guess.";
    break;
  case "C":
    text="Almost didn't make it there.";
    break;
  case "D":
    text="You need to work harder.";
    break;
  case "F":
    text="Mmight be hard to come back from this one.";
    break;
  default:
    text="Insufficient value";
}
console.log(text);