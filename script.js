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
  const muza4 = document.getElementById("muza4").value;
  const muza8 = document.getElementById("muza8").value;
  const napo4 = document.getElementById("napo4").value;
  const napo8 = document.getElementById("napo8").value;

  let mensaje = `¡Hola! Quiero hacer un pedido de Mc Pizza.%0A`;
  if (nombre) mensaje += `Mi nombre es: ${nombre}.%0A`;

  if (muza4 !== "0") mensaje += `- ${muza4} Mozzarella 4 porciones ($3.500 c/u)%0A`;
  if (muza8 !== "0") mensaje += `- ${muza8} Mozzarella 8 porciones ($7.000 c/u)%0A`;
  if (napo4 !== "0") mensaje += `- ${napo4} Napolitana 4 porciones ($4.000 c/u)%0A`;
  if (napo8 !== "0") mensaje += `- ${napo8} Napolitana 8 porciones ($7.500 c/u)%0A`;

  if (
    muza4 === "0" &&
    muza8 === "0" &&
    napo4 === "0" &&
    napo8 === "0"
  ) {
    alert("Seleccioná al menos una pizza para continuar.");
    return;
  }

  const telefono = "5493764217476";
  const url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, "_blank");
}
