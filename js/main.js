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
            <tr taskId="${task.id}">
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
    //Obtener la fila del boton clickeado
    let element = $(this)[0].parentElement.parentElement;
    //Seleccionar el elemento que tenga el atributo taskId
    let id = $(element).attr('taskId');

    Swal.fire({
      title: '¿Estás seguro de eliminar ésta tarea?',
      text: "Si eliminas, la información se perderá.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.value) {
          //Enviar ID a eliminar al backend
          $.post('task-delete.php', {id}, function(response){
              fetchTasks();

              //Mostrar mensaje de exito
              Swal.fire(
                'Eliminado',
                'La tarea ha sido aliminada correctamente.',
                'success'
              )

          });

        }
      });

  });

  //Ejecutar la función fetchTasks al cargar la página
  fetchTasks();

});
