document.addEventListener("DOMContentLoaded", function () {
  var switchElement = document.getElementById("switch");
  var moonIcon = document.getElementById("moonIcon");
  var sunIcon = document.getElementById("sunIcon");

  switchElement.checked = false;

  moonIcon.style.display = "inline";
  moonIcon.style.color = "#23b1eb";
  sunIcon.style.display = "none";
});

function changeBackgroundColor() {
  var switchElement = document.getElementById("switch");
  var moonIcon = document.getElementById("moonIcon");
  var sunIcon = document.getElementById("sunIcon");
  var bodyElement = document.body;

  if (switchElement.checked) {
    bodyElement.style.backgroundColor = "white";
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
    sunIcon.style.color = "orange";
  } else {
    bodyElement.style.backgroundColor = "";
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
    moonIcon.style.color = "black";
  }
}
