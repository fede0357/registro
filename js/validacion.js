function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const boton = document.getElementById("regBtn");
boton.addEventListener('click', function validarFormulario() {
  var campoNombre = document.getElementById("nombre").value;
  var campoApellido = document.getElementById("apellido").value;
  var campoEmail = document.getElementById("email").value;
  var campoContraseña = document.getElementById("password1").value;
  var campoRepetirContraseña = document.getElementById("password2").value;
  var checkboxTerminos = document.getElementById("terminos").checked;
  if (campoApellido === "" || campoNombre === "" || campoEmail === "" || campoContraseña === "" || campoRepetirContraseña === "" || !checkboxTerminos || campoContraseña.length < 6 || campoContraseña !== campoRepetirContraseña) {
    showAlertError();
    return;
  } showAlertSuccess();
});