function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Email must be entered");
    return false;
  }
}
