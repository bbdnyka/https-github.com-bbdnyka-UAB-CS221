let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let fname = document.getElementById("firstNamw");
  let lname = document.getElementById("lastName");

  if (fname.value == "" || lname.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${fname.value} and password of ${lname.value}`
    );

    fname.value = "";
    lname.value = "";
  }
});
