var nameInput = document.getElementById("userName");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var signBtn = document.querySelector(".btn");

var required = document.getElementById("required");
var success = document.getElementById("success");
var exists = document.getElementById("exists");
var accounts;

signBtn.addEventListener("click", function (e) {
  if (
    nameInput.value.trim() == "" ||
    emailInput.value.trim() == "" ||
    passInput.value.trim() == ""
  ) {
    required.classList.replace("d-none", "d-block");
    exists.classList.replace("d-block", "d-none");
    success.classList.replace("d-block", "d-none");
  } else {
    required.classList.replace("d-block", "d-none");
    exists.classList.replace("d-block", "d-none");
    success.classList.replace("d-none", "d-block");
    addAccount();
  }
});

if (localStorage.getItem("accounts") != null) {
  accounts = JSON.parse(localStorage.getItem("accounts"));
} else {
  accounts = [];
}
var newArr = JSON.parse(localStorage.getItem("accounts"));
function addAccount() {
  var account = {
    name: nameInput.value,
    email: emailInput.value,
    pass: passInput.value,
  };

  var emailExist;
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].email == emailInput.value) {
      emailExist = true;
    }
  }
  if (emailExist) {
    success.classList.replace("d-block", "d-none");
    exists.classList.replace("d-none", "d-block");
  } else {
    accounts.push(account);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    exists.classList.replace("d-block", "d-none");
    success.classList.replace("d-none", "d-block");
  }

  // console.log(accounts);
}
