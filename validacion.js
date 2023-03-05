function checker() {
  window.event.preventDefault();
  clearerror();
  if (document.form.nombre.value === "") {
    document.form.nombre.focus();
    document.form.nombre.classList.add("error");
    alert("El campo nombre no puede ser vacio");
  } else if (document.form.nombre.value.length > 50) {
    document.form.nombre.focus();
    document.form.nombre.classList.add("error");
    alert("El campo nombre no puede contener mas de 50 caracteres");
  }
  if (document.form.email.value === "") {
    document.form.email.focus();
    document.form.email.classList.add("error");
    alert("El campo email no puede ser vacio");
  } else if (
    document.form.email.value.indexOf("@") == -1 ||
    document.form.email.value.indexOf(".") == -1
  ) {
    document.form.email.focus();
    document.form.email.classList.add("error");
    alert("El campo email es invalido");
  }

  if (document.form.asunto.value === "") {
    document.form.asunto.focus();
    document.form.asunto.classList.add("error");
    alert("El campo asunto no puede ser vacio");
  }
  if (document.form.asunto.value.length > 50) {
    document.form.asunto.focus();
    document.form.asunto.classList.add("error");
    alert("El campo asunto no puede contener mas de 50 caracteres");
  }
  if (document.form.mensaje.value === "") {
    document.form.mensaje.focus();
    document.form.mensaje.classList.add("error");
    alert("El campo mensaje no puede ser vacio");
  }
  if (document.form.mensaje.value.length > 300) {
    document.form.mensaje.focus();
    document.form.mensaje.classList.add("error");
    alert("El campo mensaje no puede contener mas de 300 caracteres");
  }
}
function clearerror() {
  document.form.mensaje.classList.remove("error");
  document.form.email.classList.remove("error");
  document.form.asunto.classList.remove("error");
  document.form.nombre.classList.remove("error");
}
document.querySelector("form").addEventListener("submit", checker);
