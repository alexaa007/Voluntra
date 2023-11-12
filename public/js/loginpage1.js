document.getElementById('login-form').addEventListener('submit', validateForm);


const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validateForm(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (name == null || name == "") {
    alert("Name is not valid");
    return;
  }

  if (number == null || number == "") {
    alert("Number is not valid");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Email is not valid");
    return;
  }

  if (password == null || password == "") {
    alert("Password is not valid");
    return;
  }

  const userData = {
    name, number, email, password
  }


  console.log("{name : name}");

  fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData)
  }).then(res => res.json())
    .then(response => {
      if(response.success) {
          
      } else {
        alert(response.error);
      }
    });


}
