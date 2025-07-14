document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario');
  const tabla = document.getElementById('tabla-creditos');
  let editandoId = null;

  function cargarCreditos() {
    fetch('/creditos')
      .then(res => res.json())
      .then(data => {
        tabla.innerHTML = '';
        data.forEach(credito => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${credito.id}</td>
            <td>${credito.cliente}</td>
            <td>${credito.monto}</td>
            <td>${credito.tasa_interes}</td>
            <td>${credito.plazo}</td>
            <td>${credito.fecha_otorgamiento}</td>
            <td>
              <button onclick="editarCredito(${credito.id})">Editar</button>
              <button onclick="eliminarCredito(${credito.id})">Eliminar</button>
            </td>
          `;
          tabla.appendChild(row);
        });
        // Cargar la gráfica después de cargar los créditos
        cargarGrafica();
      });
  }
  function cargarGrafica() {
  fetch('/creditos')
    .then(res => res.json())
    .then(data => {
      const totales = {};

      // Agrupa montos por cliente
      data.forEach(c => {
        if (!totales[c.cliente]) totales[c.cliente] = 0;
        totales[c.cliente] += c.monto;
      });

      const labels = Object.keys(totales);
      const valores = Object.values(totales);

      const ctx = document.getElementById('graficaCreditos').getContext('2d');
      
      // Elimina gráfica anterior si existe
      if (window.miGrafica) window.miGrafica.destroy();

      // Crea nueva gráfica
      window.miGrafica = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Total de créditos por cliente',
            data: valores,
            backgroundColor: 'rgba(80, 255, 88, 0.6)',
            borderColor: 'rgb(5, 51, 219)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    });
}


  formulario.addEventListener('submit', e => {
    e.preventDefault();

    const data = {
      cliente: formulario.cliente.value,
      monto: parseFloat(formulario.monto.value),
      tasa_interes: parseFloat(formulario.tasa_interes.value),
      plazo: parseInt(formulario.plazo.value),
      fecha_otorgamiento: formulario.fecha_otorgamiento.value
    };

    const metodo = editandoId ? 'PUT' : 'POST';
    const url = editandoId ? `/creditos/${editandoId}` : '/creditos';

    fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(() => {
      formulario.reset();
      editandoId = null;
      cargarCreditos();
    });
  });

  window.editarCredito = function(id) {
    fetch(`/creditos`)
      .then(res => res.json())
      .then(data => {
        const credito = data.find(c => c.id === id);
        formulario.cliente.value = credito.cliente;
        formulario.monto.value = credito.monto;
        formulario.tasa_interes.value = credito.tasa_interes;
        formulario.plazo.value = credito.plazo;
        formulario.fecha_otorgamiento.value = credito.fecha_otorgamiento;
        editandoId = id;
      });
  }

  window.eliminarCredito = function(id) {
    if (confirm('¿Estás seguro de eliminar este crédito?')) {
      fetch(`/creditos/${id}`, {
        method: 'DELETE'
      }).then(() => cargarCreditos());
    }
  }
  cargarGrafica();
  cargarCreditos();
});
