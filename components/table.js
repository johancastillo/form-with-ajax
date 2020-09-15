Vue.component('table-component', {
  template: `
  <div>
  <!-- Resultado de las busquedas -->
  <div class="card my-4" id="task-result">
    <div class="card-body">
      <ul id="container">

      </ul>
    </div>
  </div>

  <!-- Tabla -->
    <table class="table table-bordered table-sm text-center">
      <thead>
        <tr>
          <td>ID</td>
          <td>Nombre</td>
          <td>Descripción</td>
        </tr>
      </thead>

      <tbody id="tasks"></tbody>
    </table>
    </div>
  `
})
