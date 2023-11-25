document.addEventListener("DOMContentLoaded", function () {
  function goToGit() {
    window.location.href = "Github.html";
  }

  var buttonB3 = document.getElementById("b3");

  if (buttonB3) {
    buttonB3.onclick = goToGit;
  } else {
    console.error("Element with ID 'b3' not found");
  }
});
