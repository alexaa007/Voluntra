function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email must be entered");
      return false;
    }
  }
  function validateForm() {
    let x = document.forms["myForm"]["password"].value;
    if (x == "") {
      alert("Password must be entered");
      return false;
    }
  }
  function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x.trim() == "") {
      alert("Name must be entered");
      return false;
    }
}