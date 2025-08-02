// Mostrar secciones al hacer scroll
const secciones = document.querySelectorAll("section");

const mostrarSeccion = () => {
  secciones.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", mostrarSeccion);
window.addEventListener("load", mostrarSeccion);

function enviarPedido(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const muza8 = document.getElementById("muza8").value;
  const napo8 = document.getElementById("napo8").value;
  const mitadmitad = document.getElementById("mitadmitad").value;

  if (muza8 === "0" && napo8 === "0" && mitadmitad === "0") {
    alert("Seleccioná al menos una pizza para continuar.");
    return;
  }

  let mensaje = `¡Hola! Quiero hacer un pedido de Mc Pizza. `;
  if (nombre) {
    mensaje += `Mi nombre es: ${nombre}. `;
  }

  if (muza8 !== "0") {
    mensaje += `- ${muza8} Mozzarella de 8 porciones ($7.000 c/u). `;
  }

  if (napo8 !== "0") {
    mensaje += `- ${napo8} Napolitana de 8 porciones ($7.500 c/u). `;
  }

  if (mitadmitad !== "0") {
    mensaje += `- ${mitadmitad} Mitad Mozzarella / Mitad Napolitana ($7.500 c/u). `;
  }

  const telefono = "5493764217476";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}