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

document.addEventListener("DOMContentLoaded", () => {
  const precios = document.querySelectorAll("z");
  const ahora = new Date();
  const hora = ahora.getHours();
  const minutos = ahora.getMinutes();

  precios.forEach(precioEl => {
    if (!precioEl.hasAttribute("data-precio")) {
      let precioTexto = precioEl.textContent.replace("$", "").replace(/\./g, "");
      let precioOriginal = parseInt(precioTexto);
      precioEl.setAttribute("data-precio", precioOriginal);
    }

    let precioBase = parseInt(precioEl.getAttribute("data-precio"));
    if (isNaN(precioBase)) return;

    let aplicarRecargo = false;

    if ((hora === 0 && minutos >= 0) || (hora > 0 && hora < 8)) {
      aplicarRecargo = true;
    }

    if (aplicarRecargo) {
      let nuevoPrecio = precioBase * 1.4;
      nuevoPrecio = Math.ceil(nuevoPrecio / 500) * 500;
      precioEl.textContent = "$" + nuevoPrecio.toLocaleString("es-AR");
    } else {
      precioEl.textContent = "$" + precioBase.toLocaleString("es-AR");
    }
  });
});
