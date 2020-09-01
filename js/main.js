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
    e.preventDefault()
    console.log('Submiting')
  });

});
