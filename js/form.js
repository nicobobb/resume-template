const nombre = document.getElementById("form-name");
const email = document.getElementById("form-email");
const message = document.getElementById("form-message");
const form = document.getElementById("form");
const msj = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let enviar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  msj.innerHTML = "";
  if (nombre.value.length < 6) {
    warnings += `El nombre no es válido <br>`;
    enviar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es válido <br>`;
    enviar = true;
  }
  if (message.value.length < 8) {
    warnings += `No escribió ningun mensaje<br>`;
    enviar = true;
  }

  if (enviar) {
    msj.innerHTML = warnings;
  } else {
    msj.innerHTML = "Enviado";
  }
});
