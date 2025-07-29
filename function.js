document.querySelector('.btn.guardar').addEventListener('click', function () {
  const inputs = document.querySelectorAll('.input-estilo');

  const usuario = inputs[0].value;
  const contrasena = inputs[1].value;

  // Guardar datos en localStorage
  localStorage.setItem('usuario', usuario);
  localStorage.setItem('contrasena', contrasena);

  // Redireccionar a otra página
  window.location.href ='menu.html'; // cambia esto al nombre real de tu archivo
});
document.querySelector('a[href="#registro"]').addEventListener("click", function (e) {
  e.preventDefault(); // Evita que el enlace salte
  document.querySelector("#botones-verticales").style.display = "none";
  document.querySelector("#formulario-registro").style.display = "block";
});

// Guardar datos al hacer clic en "ingresar"
document.querySelector(".btn.guardar").addEventListener("click", guardarUsuario);

// Permitir Enter para guardar también
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && document.querySelector("#formulario-registro").style.display === "block") {
    guardarUsuario();
  }
});

function guardarUsuario() {
  const usuario = document.getElementById("usuario").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();

  if (usuario && contrasena) {
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("contrasena", contrasena);
    alert("Cuenta creada exitosamente");
    location.reload(); 
     window.location.href ='menu.html';// opcional: recarga página
  } else {
    alert("Por favor completa ambos campos");
  }
}

function mostrarContrasena() {
  const input = document.getElementById("contrasena");
  const icono = document.getElementById("toggle-icono");

  if (input.type === "password") {
    input.type = "text";
    icono.src = "img/extra/ojo2.png"; // Ícono para "ocultar"
  } else {
    input.type = "password";
    icono.src = "img/extra/ojo.png"; // Ícono para "mostrar"
  }
}