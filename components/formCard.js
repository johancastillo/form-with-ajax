Vue.component('form-card', {
  template: `
  <div class="card bg-dark">
    <div class="card-body">
      <form id="task-form">

        <input type="hidden" id="taskId">

        <div class="form-group">
          <input type="text" class="form-control" id="name"
          placeholder="Nombre de la tarea" required
          pattern="[A-Za-z0-9_-]{1,20}" title="Ingresa texto">
        </div>

        <div class="form-group">
          <textarea rows="8" cols="80" id="description" class="form-control"
          placeholder="Escriba una descripción" value="" required
          ppattern="[A-Za-z0-9_-]{1,50}"></textarea>
        </div>

        <button type="submit" class="btn btn-primary btn-block text-center">
          Guardar tarea
        </button>

      </form>
    </div>
  </div>
  `
});
