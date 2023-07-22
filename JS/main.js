const btnRegistration = document.getElementById("btnLogin");
const formCont = document.getElementById("formContainer");
const emailInp = document.getElementById("exampleInputEmail1");
const passInp = document.getElementById("exampleInputPassword1");
const checkInp = document.getElementById("exampleCheck1");
const btnForm = document.getElementById("buttonFormModal");
const btnClose = document.querySelector(".close");

btnRegistration.addEventListener("click", () => {
  formCont.style.display = "block";
});

btnClose.addEventListener("click", () => {
  formCont.style.display = "none";
});


const burgerMenu = document.getElementById("burgerMenu");
const dropMenu = document.getElementById("navbarNavDropdown");
const navIcon = document.getElementById("navbar-toggler-icon");

burgerMenu.addEventListener("click", function () {
  if (dropMenu.style.display === "block") {
    dropMenu.style.display = "none";
  } else {
    dropMenu.style.display = "block";
  }
});

