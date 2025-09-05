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
  const mensajeEl = document.getElementById("mensaje");
  const contadorEl = document.getElementById("contador");

  const parsearPrecio = txt => {
    const limpio = String(txt).replace(/[^\d]/g, "");
    return limpio === "" ? NaN : parseInt(limpio, 10);
  };
  const formatear = n => "$" + n.toLocaleString("es-AR");

  function esHappyHour(h, m) {
    return (h >= 20 && h <= 23) || (h === 0 && m <= 0);
  }

  function segundosHasta(hActual, mActual, sActual, hTarget, mTarget, sTarget) {
    const ahoraSeg = hActual*3600 + mActual*60 + sActual;
    const targetSeg = hTarget*3600 + mTarget*60 + sTarget;
    if (targetSeg >= ahoraSeg) return targetSeg - ahoraSeg;
    return 24*3600 - ahoraSeg + targetSeg;
  }

  function actualizarPrecios() {
    const ahora = new Date();
    const h = ahora.getHours();
    const m = ahora.getMinutes();
    const inHH = esHappyHour(h, m);

    precios.forEach(precioEl => {
      if (!precioEl.hasAttribute("data-precio")) {
        const precioOriginal = parsearPrecio(precioEl.textContent);
        if (!isNaN(precioOriginal)) precioEl.setAttribute("data-precio", String(precioOriginal));
      }

      const precioBase = parseInt(precioEl.getAttribute("data-precio") || "", 10);
      if (isNaN(precioBase)) return;

      precioEl.innerHTML = "";

      if (inHH) {
    let aumento = Math.ceil((precioBase * 1.4) / 500) * 500;
    precioEl.innerHTML = `<span style="text-decoration: line-through; opacity:0.7; margin-right:5px">${formatear(aumento)}</span><span style="font-weight:bold; color:#00ff00">${formatear(precioBase)}</span>`;
    } else {
    let nuevo = Math.ceil((precioBase * 1.4) / 500) * 500;
    precioEl.textContent = formatear(nuevo);
    }
    });
   }

  function actualizarContador() {
    const ahora = new Date();
    const h = ahora.getHours();
    const m = ahora.getMinutes();
    const s = ahora.getSeconds();
    const inHH = esHappyHour(h, m);

    if (mensajeEl && contadorEl) {
      let segs, hh, mm, ss;

      if (inHH) {
        mensajeEl.textContent = "¡Estamos en Happy Hour! 🎉 Pedí ahora — precios especiales hasta las 00:00.";
        segs = segundosHasta(h, m, s, 0, 0, 0);
      } else {
        mensajeEl.textContent = "⏳ El Happy Hour comienza todos los días a las 20:00. ¡No te lo pierdas!";
        segs = segundosHasta(h, m, s, 20, 0, 0);
      }

      hh = Math.floor(segs / 3600);
      mm = Math.floor((segs % 3600) / 60);
      ss = segs % 60;

      contadorEl.textContent = `${String(hh).padStart(2,"0")}:${String(mm).padStart(2,"0")}:${String(ss).padStart(2,"0")}`;

      if (segs <= 1) location.reload();
    }
  }

  actualizarPrecios();
  actualizarContador();
  setInterval(actualizarPrecios, 60_000);
  setInterval(actualizarContador, 1000);
});
