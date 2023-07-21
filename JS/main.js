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
