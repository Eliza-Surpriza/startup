window.onload = function() {

function login() {
    const nameEl = document.querySelector("#username");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "f.html";
  }
  
  document.querySelector("#loginButton").addEventListener("click", login);

};