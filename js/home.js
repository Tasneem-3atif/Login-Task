var userName = document.getElementById("userName");

var name = JSON.parse(localStorage.getItem("currentUser")).name;

// console.log(name);

userName.textContent = name;
