const btnLogin = document.getElementById("btnLogin");
const btnLogin2 = document.getElementById("btnLogin2");
const formCont = document.getElementById("formContainer");
const emailInp = document.getElementById("exampleInputEmail1");
const passInp = document.getElementById("exampleInputPassword1");
const checkInp = document.getElementById("exampleCheck1");
const btnForm = document.getElementById("buttonFormModal");
const btnClose = document.querySelector(".close");

btnLogin.addEventListener("click", () => {
  formCont.style.display = "block";
});
btnLogin2.addEventListener("click", () => {
  formCont.style.display = "block";
});

btnClose.addEventListener("click", () => {
  formCont.style.display = "none";
});

const burgerMenu = document.getElementById("burgerMenu");
const dropMenu = document.getElementById("navbarNavDropdown");
// const navIcon = document.getElementById("navbar-toggler-icon");

burgerMenu.addEventListener("click", function () {
  if (dropMenu.style.display === "block") {
    dropMenu.style.display = "none";
  } else {
    dropMenu.style.display = "block";
  }
});

const btnRegistration = document.getElementById("btnRegister");
const btnRegistration2 = document.getElementById("btnRegister2");
const btnRegistration3 = document.getElementById("btnRegister3");
const registerCont = document.getElementById("registerContainer");
const btnClose1 = document.querySelector(".close1");

btnRegistration.addEventListener("click", () => {
  registerCont.style.display = "block";
});

btnRegistration2.addEventListener("click", () => {
  registerCont.style.display = "block";
});
btnRegistration3.addEventListener("click", () => {
  registerCont.style.display = "block";
});
btnClose1.addEventListener("click", () => {
  registerCont.style.display = "none";
});
