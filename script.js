// Obtener el botón y los textos
const boton = document.getElementById("verMasBtn");
const mensajePrincipal = document.getElementById("mensajePrincipal");
const texto = document.querySelector(".text");

// Evento click
boton.addEventListener("click", () => {
  mensajePrincipal.style.display = "none";
  texto.classList.add("active");
  boton.style.display = "none";
});
