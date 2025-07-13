// js/index.js

function renderPropiedades(propiedades, contenedor) {
  let html = "";
  for (let propiedad of propiedades) {
    html += `
    <div class="col-sm-6 col-lg-4 mb-4 d-flex">
    <div class="card h-100 shadow-sm flex-fill d-flex flex-column">
    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${propiedad.nombre}</h5>
      <p class="card-text flex-grow-1">${propiedad.descripcion}</p>
      <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
      <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
      <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo.toLocaleString()}</p>
      <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
        <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
        ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
      </p>
      <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
        <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>
        ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
      </p>
    </div>
  </div>
</div>

    `;
  }
  contenedor.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  const ventaContainer = document.querySelector("#venta .row");
  const alquilerContainer = document.querySelector("#alquiler .row");

  renderPropiedades(propiedades_venta.slice(0, 3), ventaContainer);
  renderPropiedades(propiedades_alquiler.slice(0, 3), alquilerContainer);
});
