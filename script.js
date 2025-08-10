// Mostrar secciones al hacer scroll
const secciones = document.querySelectorAll("section");

document.addEventListener('contextmenu', event => event.preventDefault());

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
  const fuga = document.getElementById("fuga").value;
  const cala = document.getElementById("cala").value;
  const rucula = document.getElementById("rucula").value;
  const coca = document.getElementById("coca").value;
  const sierra = document.getElementById("sierra").value;
  const lata = document.getElementById("lata").value;
  const brahma = document.getElementById("brahma").value;
  const c361 = document.getElementById("c361").value;
  const agua = document.getElementById("agua").value;
  const vino = document.getElementById("vino").value;
  const secco = document.getElementById("secco").value;

  if (muza8 === "0" && napo8 === "0" && fuga === "0" && cala === "0" && rucula === "0") {
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

  if (fuga !== "0") {
    mensaje += `- ${fuga} Fugazzeta de 8 porciones ($8.000 c/u). `;
  }

  if (cala !== "0") {
    mensaje += `- ${cala} Calabresa de 8 porciones ($9.500 c/u). `;
  }

  if (rucula !== "0") {
    mensaje += `- ${rucula} Rúcula de 8 porciones ($8.000 c/u). `;
  }

  if (coca !== "0") {
    mensaje += `- ${coca} Coca Cola de 1.5 L ($3.800 c/u). `;
  }

  if (sierra !== "0") {
    mensaje += `- ${sierra} Sierra de los Padres 2.25 L ($3.000 c/u). `;
  }

  if (lata !== "0") {
    mensaje += `- ${lata} Cerveza Heineken 473 mL ($3.500 c/u). `;
  }

  if (brahma !== "0") {
    mensaje += `- ${brahma} Cerveza Brahma 473 mL ($1.800 c/u). `;
  }

  if (c361 !== "0") {
    mensaje += `- ${c361} Cerveza 361 1.5 L ($3.000 c/u). `;
  }

  if (agua !== "0") {
    mensaje += `- ${agua} Agua Benedictino 3 L ($2.000 c/u). `;
  }

  if (vino !== "0") {
    mensaje += `- ${vino} Vino Canciller 1125 mL ($3.500 c/u). `;
  }

  if (secco !== "0") {
    mensaje += `- ${secco} Gaseosa Secco 3L ($2.000 c/u). `;
  }

  // Sumar la cantidad total de pizzas
  const totalPizzas = 
    (muza8 === "+3" ? 4 : parseInt(muza8)) +
    (napo8 === "+3" ? 4 : parseInt(napo8)) +
    (fuga === "+3" ? 4 : parseInt(fuga)) +
    (cala === "+3" ? 4 : parseInt(cala)) +
    (rucula === "+3" ? 4 : parseInt(rucula));

  if (totalPizzas >= 3) {
    mensaje += `¡Con envío GRATIS por pedir 3 o más pizzas! 🎉`;
  } else {
  }

  const telefono = "5493764217476";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
