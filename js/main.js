$(function(){
  console.log('JQuery is Working');
  $('#task-result').hide();

  $('#search').keyup(function(e){
    if($('#search').val()){
      let search = $('#search').val();
      $.ajax({
        url: 'task-search.php',
        type: 'POST',
        data: {search: search},
        success: function(response){
          let tasks = JSON.parse(response);
          let template = '';

          tasks.forEach(task => {
            template += `<li>
              ${task.name}
            </li>`
          });

          $('#container').html(template);
          $('#task-result').show();
        }
      })
    }
  });

  $('#task-form').submit(function(e){
    const postData = {
      name: $('#name').val(),
      description: $('#description').val()
    };
    //Prevenir el comportamiento por defecto del evento submit
    e.preventDefault()
    //Enviar datos del formulario
    $.post('task-add.php', postData, response =>{
      //Obtener todas las tareas nuevamente al agregar una nueva
      fetchTasks();
      //Mensaje de exito al crear una nueva tarea
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tarea agregada exitosamente',
        showConfirmButton: false,
        timer: 1500
      });

      //Resetear campos de formularios al enviar datos
      $('#task-form').trigger('reset');
    });
  });

  //Obtener tareas
  function fetchTasks(){
    $.ajax({
      url:'task-list.php',
      type: 'GET',
      success: function(response){
        let tasks = JSON.parse(response);
        //Plantilla HTML
        let template = '';
        tasks.map(task => {
          template += `
            <tr>
              <td>${task.id}</td>
              <td>${task.name}</td>
              <td>${task.description}</td>
              <td>
                <button class="task-delete btn btn-danger">
                  Eliminar
                </button>
              </td>
            </tr>
          `
        });

        //Insertar HTML en el DOM
        $('#tasks').html(template);

      }
    });
  };

  //Eliminar tareas
  $(document).on('click', '.task-delete', function(){
    //Obtener ID de la tarea a eliminar
    console.log($(this));
  });

  //Ejecutar la función fetchTasks al cargar la página
  fetchTasks();

});
