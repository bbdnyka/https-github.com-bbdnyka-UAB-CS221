//object for editing the canvas
const canvas = document.querySelector("canvas")
let loginform = document.getElementById("loginForm")
loginform.addEventListener("submit",(e)=>{
  e.preventDefault();

  let firstname = document.getElementById("firstName");
  let lastname = document.getElementById("lastName");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!")
  } 
    else {
      // perform operation with form input
      alert("This form has been successfully submitted!");
      console.log(
        `This form has a last name of ${lastname.value} and a first name of ${firstname.value}`
      );
  
      lastname.value = "";
      firstname.value = "";
    }
});