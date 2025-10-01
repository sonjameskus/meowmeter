'use strict'

const username = document.getElementById("username");
const login = document.getElementById("login");
const loginMsg = document.getElementById("loginMsg");
const kubios = document.getElementById("kubios");
const dataMsg = document.getElementById("dataMsg"); // <-- tämä puuttui
const submitData = document.getElementById("submitData");
const data = document.getElementById("data");
const submitted = document.getElementById("submitted");
const newsubDiv = document.getElementById("newsub");
const logoutBtn = document.getElementById("logout");

username.addEventListener("submit", function(event) {
  event.preventDefault();

  const user_name = document.getElementById("user_name").value;
  const passwd = document.getElementById("passwd").value;

  localStorage.setItem("user_name", user_name);
  localStorage.setItem("passwd", passwd);

  username.style.display = "none";
  loginMsg.textContent = "You have logged in. Do you want to collect your data from Kubios Cloud Service?";
  login.style.display = "block";
  logoutBtn.style.display = "inline-block";
});

kubios.addEventListener("click", function() {
  loginMsg.textContent = "";
  kubios.style.display = "none";
  dataMsg.textContent = "You have successfully collected your data from Kubios Cloud Service";
});

submitData.addEventListener("click", function() {
  login.style.display = "none";
  data.style.display = "block";
});

data.addEventListener("submit", function(event) {
  event.preventDefault();

  const id = document.getElementById("id").value;
  const date = document.getElementById("date").value;
  const action = document.getElementById("action").value;

  localStorage.setItem("ID", id);
  localStorage.setItem("date", date);
  localStorage.setItem("action", action);

  data.style.display = "none";
  submitted.textContent = "Thank you for your submission!";
  newsubDiv.style.display = "block";
});

function newsubmission() {
  localStorage.removeItem("ID");
  localStorage.removeItem("date");
  localStorage.removeItem("action");

  data.reset();
  data.style.display = "block";
  submitted.textContent = "";
  newsubDiv.style.display = "none";
}
logoutBtn.addEventListener("click", function() {
  localStorage.clear();
  username.reset();

  loginMsg.textContent = "";
  dataMsg.textContent = "";
  kubios.style.display = "inline-block";

  username.style.display = "block";
  login.style.display = "none";
  data.style.display = "none";
  submitted.textContent = "";
  newsubDiv.style.display = "none";
  logoutBtn.style.display = "none";
});
