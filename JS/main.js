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

formCont.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    emailInp.value &&
    passInp.value &&
    checkInp.value
  ) {
    console.group("Datos ingresados");
    console.log("Correo: " + emailInp.value);
    console.log("Contraseña: " + passInp.value);
    return;
  } else {
    alert("Debe llenar todos los campos");
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

const InputPassword = document.getElementById("InputPassword");
const repeatInputPassword = document.getElementById("repeatInputPassword");
const createAccount = document.getElementById("createAccount");
const aceptCheck = document.getElementById("aceptCheck");

createAccount.addEventListener("click", () => {
  if (InputPassword.value !== repeatInputPassword.value) {
    alert("Las contraseñas no coinciden");
  } else if (aceptCheck.checked === false) {
    alert("Debes aceptar los terminos y condiciones.");
  }
});

const btnLogin3 = document.getElementById("btnLogin3");

btnLogin3.addEventListener("click", () => {
  registerCont.style.display = "none";
  formCont.style.display = "block";
});

const passwordMessage = document.getElementById("passwordMessage");
const registerBtnModal = document.getElementById("registerBtn-LogInModal");
const namesRegister = document.getElementById("NameSurname");
const emailRegister = document.getElementById("exampleInputEmail2");

const pwSpinner = document.getElementById("passwordSpinner");
const pwSpinnerGrow = document.getElementById("passwordSpinnerGrow");

registerBtnModal.addEventListener("click", () => {
  registerCont.style.display = "block";
  formCont.style.display = "none";
});

namesRegister.addEventListener("input", function () {
  const inputValue = namesRegister.value;
  const validCharacters = /^[A-Za-z\s]+$/;
  if (!validCharacters.test(inputValue)) {
    namesRegister.value = inputValue.replace(/[^A-Za-z\s]+/g, "");
  }
});

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
};

InputPassword.addEventListener("input", () => {
  pwSpinner.style.display = "inline-block";
  pwSpinnerGrow.style.display = "inline-block";
  passwordMessage.style.display = "none";

  const password = InputPassword.value;
  const isValidPassword = validatePassword(password);

  setTimeout(() => {
    pwSpinner.style.display = "none";
    pwSpinnerGrow.style.display = "none";
    passwordMessage.style.display = "inline-block";

    if (isValidPassword) {
      InputPassword.style.borderColor = "green";
      passwordMessage.textContent = "Contraseña segura";
      passwordMessage.classList.remove("invalid");
      passwordMessage.classList.add("valid");
      console.log("Contraseña válida");
    } else {
      InputPassword.style.borderColor = "red";
      passwordMessage.textContent = "Contraseña inválida";
      passwordMessage.classList.remove("valid");
      passwordMessage.classList.add("invalid");
      passwordMessage.style.display = "block";
      console.log("Contraseña inválida");
    }
  }, 1000);
});

registerCont.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    namesRegister.value &&
    emailRegister.value &&
    InputPassword.value &&
    repeatInputPassword.value
  ) {
    console.group("Datos ingresados");
    console.log("Nombre y Apellido: " + namesRegister.value);
    console.log("Correo: " + emailRegister.value);
    console.log("Contraseña: " + InputPassword.value);
    return;
  } else {
    alert("Debe llenar todos los campos");
  }
});