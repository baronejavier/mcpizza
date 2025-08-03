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
  const sierra = document.getElementById("sierra").value;
  const lata = document.getElementById("lata").value;
  const c361 = document.getElementById("c361").value;

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
    mensaje += `- ${napo8} Napolitana de 8 porciones ($8.500 c/u). `;
  }

  if (mitadmitad !== "0") {
    mensaje += `- ${mitadmitad} Mitad Mozzarella / Mitad Napolitana ($8.000 c/u). `;
  }

  if (sierra !== "0") {
    mensaje += `- ${sierra} Sierra de los Padres 2.25 L ($3.000 c/u). `;
  }

  if (lata !== "0") {
    mensaje += `- ${lata} Cerveza Heineken 473 mL ($2.500 c/u). `;
  }

  if (c361 !== "0") {
    mensaje += `- ${c361} Cerveza 361 1.5 L ($3.000 c/u). `;
  }

  // Sumar la cantidad total de pizzas
  const totalPizzas = 
    (muza8 === "+3" ? 4 : parseInt(muza8)) +
    (napo8 === "+3" ? 4 : parseInt(napo8)) +
    (mitadmitad === "+3" ? 4 : parseInt(mitadmitad));

  if (totalPizzas >= 2) {
    mensaje += `¡Con envío GRATIS por pedir 2 o más pizzas! 🎉`;
  } else {
    mensaje += `(Envío gratis comprando 2 o más pizzas).`;
  }

  const telefono = "5493764217476";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
