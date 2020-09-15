Vue.component('navbar', {
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a href="#" class="navbar-brand">{{ title }}</a>

    <ul class="navbar-nav ml-auto">
      <form class="form-inline my-2 my-lg-0">

        <input @keyup="buscar()" type="search" id="search" class="form-control mr-sm-2"
        placeholder="Buscar tarea">

        <button type="submit" class="btn btn-success my-2 my-sm-0">Buscar</button>

      </form>
    </ul>
  </nav>
  `,
  data(){
    return {
      title: "Tasks List App",
      task: "Es"
    }
  },
  methods: {
    buscar(){
      //Enviar datos del formulario a PHP mediante AJAX
      $.post('backend/task-search.php', {search: this.task}, response =>{
        console.log(response)

      });
    }
  }
});
