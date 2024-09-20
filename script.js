let user = document.getElementById("user");
let pswd = document.getElementById("pswd");
let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let user1 = document.createElement("h3");
  let pswd1 = document.createElement("h3")
  localStorage.setItem("ID", user.value);
  localStorage.setItem("PASSWORD",pswd.value)
  let x = localStorage.getItem("ID", user.value);
  let y =localStorage.getItem("PASSWORD",pswd.value)
  user1.innerHTML = "You have entered your USERID as "+x.toUpperCase();
  user1.style.textAlign = "center"
  pswd1.innerHTML = "You have entered your PASSWORD as "+y.toUpperCase();
  pswd1.style.textAlign = "center"
  document.body.appendChild(user1);
  document.body.appendChild(pswd1);

});
