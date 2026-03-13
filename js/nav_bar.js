// document.addEventListener("DOMContentLoaded", function () {
//   fetch("/nav_bar.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("navbar-container").innerHTML = data;
//     });
// });

fetch("../nav_bar/nav_bar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("nav_bar").innerHTML = data;
  });
