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
      console.log(response);
      alert("Tarea agregada exitosamente");

      //Resetear campos de formularios al enviar datos
      $('#task-form').trigger('reset');
    });
  });

  $.ajax({
    url:'task-list.php',
    type: 'GET',
    success: function(response){
      console.log(response);
    }
  });

});
