var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var loginBtn = document.querySelector("#login");

var required = document.getElementById("required");
var incorrect = document.getElementById("incorrect");

var accounts = JSON.parse(localStorage.getItem("accounts"));
loginBtn.addEventListener("click", function (e) {
  if (emailInput.value.trim() == "" || passInput.value.trim() == "") {
    required.classList.replace("d-none", "d-block");
  } else {
    required.classList.replace("d-block", "d-none");
    for (var i = 0; i < accounts.length; i++) {
      if (
        accounts[i].email !== emailInput.value ||
        accounts[i].pass !== passInput.value
      ) {
        incorrect.classList.replace("d-none", "d-block");
      } else {
        incorrect.classList.replace("d-block", "d-none");
        console.log(true);
        localStorage.setItem("currentUser", JSON.stringify(accounts[i]));
        // console.log(localStorage.getItem("currentUser"));

        location = "/HTML/Home.html";
      }
    }
  }
});
