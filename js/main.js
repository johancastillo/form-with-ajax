$(function(){
  console.log('JQuery is Working')

  $('#search').keyup(function(){
    let search = $('#search').val();
    $.ajax({
      url: 'task-search.php',
      type: 'POST',
      data: {search: search},
      success: function(response){
        let tasks = JSON.parse(response);
        console.log(tasks)
      }
    })
  })
});
