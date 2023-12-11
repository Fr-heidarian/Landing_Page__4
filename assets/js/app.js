document.addEventListener("DOMContentLoaded", function () {
  const switchElement = document.getElementById("switch");
  const moonIcon = document.getElementById("moonIcon");
  const sunIcon = document.getElementById("sunIcon");

  switchElement.checked = false;

  moonIcon.style.display = "inline";
  moonIcon.style.color = "#23b1eb";
  sunIcon.style.display = "none";

  switchElement.addEventListener("change", function () {
    const bodyElement = document.body;
    const isSwitchChecked = switchElement.checked;

    bodyElement.style.backgroundColor = isSwitchChecked ? "white" : "";
    moonIcon.style.display = isSwitchChecked ? "none" : "inline";
    sunIcon.style.display = isSwitchChecked ? "inline" : "none";
    moonIcon.style.color = isSwitchChecked ? "" : "#23b1eb";
    sunIcon.style.color = isSwitchChecked ? "orange" : "";
  });
});
