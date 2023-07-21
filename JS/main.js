const btnRegistration = document.getElementById("btnRegister");
const formCont = document.getElementById("formContainer");
const emailInp = document.getElementById("exampleInputEmail1");
const passInp = document.getElementById("exampleInputPassword1");
const checkInp = document.getElementById("exampleCheck1");
const btnForm = document.getElementById("buttonFormModal");

btnRegistration.addEventListener("click", ()=>{
    formCont.style.display = "block";

})

window.onclick = function(event) {
    if (event.target == formCont) {
      formCont.style.display = "none";
    }
  }